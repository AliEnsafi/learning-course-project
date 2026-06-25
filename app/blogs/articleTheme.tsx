"use client";

import { useEffect, useState, useMemo } from "react"
import { supabase } from "@/lib/supabase"
import ArticleSearch from "./articleSearch"
import ArticleList from "./articleList"
import { Article } from "./data"

export default function ArticleTheme() {

  const [articles, setArticles] = useState<Article[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.from("blogs").select("*");
        if (!error && data) {
          setArticles(data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles()
  }, [])

  const filteredArticles = useMemo(() => {

    return articles.filter((item) =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase().trim())
    )
  }, [articles, searchQuery])

  return (

    <div className="container w-full flex flex-col items-center mt-10">
      <div className="w-4/5 mb-8">

        <ArticleSearch
          items={articles}
          onQueryChange={(q) => setSearchQuery(q)}
        />

      </div>

      <div className="w-4/5">

        <ArticleList articles={filteredArticles} loading={loading} />

      </div>
    </div>
  );
}
