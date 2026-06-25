"use client"

export default function ArticleSearch({ items, onQueryChange }: { items: any[], onQueryChange: (q: string) => void }) {
  return (
    <input
      type="text"
      placeholder="جستجو در مقالات..."
      className="w-full p-4 rounded-md border border-slate-200 outline-none focus:border-violet-500 transition"
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}
