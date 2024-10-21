// src/pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const defaultEmail = process.env.NEXT_PUBLIC_DEFAULT_EMAIL;
    const defaultPassword = process.env.NEXT_PUBLIC_DEFAULT_PASSWORD;

    if (email === defaultEmail && password === defaultPassword) {
      res.status(200).json({ message: "Login bem-sucedido!" });
    } else {
      res.status(401).json({ message: "Credenciais inválidas." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido.`);
  }
}
