import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
    const { name, email, password, phone } = await req.json();

    // 이메일 중복체크
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return new Response(JSON.stringify({ error : "User already exists" }), {
            status: 400,
        });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10)

    // 사용자 생성
    const user = await prisma.user.create( {
        data: {
            name,
            email,
            password: hashedPassword,
            phone,
        },
    });

    return new Response(JSON.stringify(user), {status: 201});
}