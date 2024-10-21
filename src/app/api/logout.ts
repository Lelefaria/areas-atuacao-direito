import type { NextApiRequest, NextApiResponse } from "next";

const authenticatedUsers = new Set<string>(); // Simulação de usuários autenticados

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Remove o usuário da lista de autenticados
    authenticatedUsers.delete(email);

    res.status(200).json({ message: "Logout bem-sucedido!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido.`);
  }
}
