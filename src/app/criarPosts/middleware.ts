// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Verifique se o usuário está tentando acessar a rota /app/criarPosts
  if (pathname === "/app/criarPosts") {
    const email = url.searchParams.get("email");
    const password = url.searchParams.get("password");

    // Verifique se o email e a senha correspondem aos valores definidos no .env
    if (
      email === process.env.NEXT_PUBLIC_DEFAULT_EMAIL &&
      password === process.env.NEXT_PUBLIC_DEFAULT_PASSWORD
    ) {
      return NextResponse.next(); // Permite o acesso à página
    } else {
      return NextResponse.redirect(new URL("/login", req.url)); // Redireciona para a página de login
    }
  }

  return NextResponse.next(); // Permite o acesso a outras páginas
}

export const config = {
  matcher: ["/app/criarPosts"], // Define a rota protegida
};
