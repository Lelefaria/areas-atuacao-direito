import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      {
        message: "ID é obrigatório.",
      },
      {
        status: 400,
      }
    );
  }

  try {
    // Buscar o post pelo ID
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id, 10) }, // Conversão para inteiro
    });

    if (!post) {
      return NextResponse.json(
        {
          message: "Post não encontrado.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "Sucesso",
      data: post,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Ocorreu um erro ao buscar o post.",
      },
      {
        status: 500,
      }
    );
  }
}
