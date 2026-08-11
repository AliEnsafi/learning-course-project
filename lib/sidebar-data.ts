import { supabase } from "@/lib/supabase"
import { SidebarArticle } from "@/types/blog.types"
import { SidebarCourse } from "@/types/courses.types"

export async function getLatestArticles(currentSlug: string): Promise<SidebarArticle[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("id, title, slug, writer")
    .neq("slug", currentSlug)
    .order("created_at", { ascending: false })
    .limit(5)

  if (error || !data) return []

  return data
}

export async function getLatestCourses(): Promise<SidebarCourse[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, slug, author, pricedisplay")
    .order("created_at", { ascending: false })
    .limit(5)

  if (error || !data) return []

  return data
}
