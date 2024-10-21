"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function PostPage() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); // Usando useParams para acessar o ID da URL

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("ID do post não fornecido.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/post/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar o post");
        }

        const responseJson = await response.json();
        setPost(responseJson.data);
      } catch (error) {
        setError("Não foi possível carregar o post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        {post ? (
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-auto">
            <h1 className="text-3xl font-bold mb-4 text-center break-words">
              {post.title}
            </h1>
            <p className="text-gray-600 mb-4 break-words">{post.content}</p>
            <div className="flex justify-between text-sm text-gray-400 mt-auto">
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              <p>Por Rozane Fregulia</p>
            </div>
          </div>
        ) : (
          <p>Post não encontrado.</p>
        )}
      </div>
    </div>
  );
}
