import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { title, content } = await req.json()

    if (!title || !content) {
        return NextResponse.json({
            message: 'Título e conteúdo é obrigatório.'
        }, {
            status: 400
        })
    }

    const post = await prisma.post.create({
        data: {
            title,
            content,
        }
    })

    return NextResponse.json({
        message: 'Sucesso',
        data: post
    })
}

export async function GET(){
    const posts = await prisma.post.findMany()
    console.log(posts)
    return NextResponse.json({
        message: 'Sucesso',
        data: posts
    })
}