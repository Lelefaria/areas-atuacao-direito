"use client";

import { Post } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await fetch("/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    // Ordena os posts do mais recente para o mais antigo
    const sortedPosts = responseJson.data.sort(
      (a: Post, b: Post) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setPosts(sortedPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const truncateContent = (content: string | null, maxLength: number) => {
    const validContent = content || "";
    return validContent.length > maxLength
      ? validContent.substring(0, maxLength) + "..."
      : validContent;
  };

  const truncateTitle = (title: string | null, maxLength: number) => {
    const validTitle = title || "";
    return validTitle.length > maxLength
      ? validTitle.substring(0, maxLength)
      : validTitle;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Posts Recentes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="group">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-64">
                <div className="flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-600 text-center break-words">
                    {truncateTitle(post.title, 44)}
                  </h2>
                  <p className="text-gray-600 mb-4 break-words">
                    {truncateContent(post.content, 130)}
                  </p>
                </div>
                <p className="text-sm text-gray-900 mt-auto">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
