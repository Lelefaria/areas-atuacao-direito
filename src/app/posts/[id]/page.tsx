"use client";

import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  content: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "001",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae nesciunt iste sed quidem officiis maiores voluptatum repudiandae recusandae vitae, distinctio modi rem nihil minima ipsum optio dolorum autem reiciendis.",
  },
  {
    id: 2,
    title: "Estilizando com Tailwind CSS",
    content: "Tailwind CSS é uma ferramenta de utilitários de baixo nível...",
  },
  {
    id: 3,
    title: "Next.js 14: Novidades e Melhorias",
    content: "A versão 14 do Next.js trouxe grandes melhorias, como...",
  },
];

interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  const postId = parseInt(params.id, 10);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">{post?.title}</h1>
        <p className="text-lg text-gray-700">{post?.content}</p>
      </div>
    </div>
  );
}
