// app/posts/page.tsx
"use client";

import Link from "next/link";

type Post = {
  id: number;
  title: string;
  summary: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "001",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi ",
  },
  {
    id: 2,
    title: "Estilizando com Tailwind CSS",
    summary:
      "Aprenda a usar o Tailwind CSS para criar interfaces rápidas e responsivas.",
  },
  {
    id: 3,
    title: "Next.js 14: Novidades e Melhorias",
    summary:
      "Exploramos as últimas atualizações e novas funcionalidades do Next.js 14.",
  },
];

export default function PostsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Posts Recentes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((posts) => (
            <Link key={posts.id} href={`/posts/${posts.id}`} className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-600">
                  {posts.title}
                </h2>
                <p className="text-gray-600 mb-4">{posts.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
