"use client";

import { useState, FormEvent } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!title || !content) {
      setError("Título e conteúdo são obrigatórios.");
      return;
    }

    setError(null);

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setSuccessMessage("Post criado com sucesso!");
        setTitle("");
        setContent("");
        
      } else {
        setError("Ocorreu um erro ao criar o post.");
      }
    } catch (error) {
      setError("Erro de conexão. Tente novamente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full my-auto">
    <h1 className="text-2xl font-bold mb-6">Criar Novo Post</h1>
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold">Título</label>
        <input
          type="text"
          className="w-full border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título do post"
        />
      </div>
  
      <div>
        <label className="text-sm font-semibold">Conteúdo</label>
        <textarea
          className="w-full border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500 h-48"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite o conteúdo do post"
        />
      </div>
  
      
  
      <button
        type="submit"
        className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
      >
        Criar Post
      </button>
  
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
    </form>
  </div>
  
  );
};

export default CreatePost;
