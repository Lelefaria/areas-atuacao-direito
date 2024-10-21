"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import User from "../../types/types";
import { Validate } from "../../utils/validateLogin";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data: User = {
      email,
      password,
      ok: successMessage,
    };

    const validationErrors = Validate(data);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          setSuccessMessage(result.message);
          setFadeOut(false);

          // Redireciona para a página de criação de posts com parâmetros de consulta
          setTimeout(() => {
            router.push(
              `/app/criarPosts?email=${encodeURIComponent(
                email
              )}&password=${encodeURIComponent(password)}`
            );
          }, 3000);

          setEmail("");
          setPassword("");
          setErrors({});
        } else {
          const result = await response.json();
          setErrors({ general: result.message });
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error); // Adicione um log para depuração
        setErrors({ general: "Ocorreu um erro. Tente novamente mais tarde." });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 p-8 max-w-lg mx-auto min-h-screen justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full">
        <label className="text-lg font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          className="border rounded-lg py-3 px-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-sm text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>

      <div className="flex flex-col w-full">
        <label className="text-lg font-semibold mb-2" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="border rounded-lg py-3 px-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <small className="text-sm text-red-500 mt-1">
            {errors?.password}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="bg-gray-700 hover:bg-gray-600 rounded-lg text-white py-3 px-6 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
      >
        Entrar
      </button>

      {successMessage && (
        <small
          className={`text-sm text-green-700 mt-2 text-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {successMessage}
        </small>
      )}

      {errors?.general && (
        <small className="text-sm text-red-500 mt-2 text-center">
          {errors?.general}
        </small>
      )}
    </form>
  );
};

export default Form;
