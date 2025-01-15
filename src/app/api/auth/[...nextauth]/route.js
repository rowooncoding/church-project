import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            // 사용자 인증 로직
            const user = await prisma.user.findUnique({
                where: { email: credentials.email },
            });

            if (!user) {
                throw new Error("No user found with this email");
            }

            const isValidPassword = await bcrypt.compare(credentials.password, user.password);

            if (!isValidPassword) {
                throw new Error("Invalid credentials");
            }

            return user; // 반환된 사용자 정보는 JWT 토큰에 포함됩니다.
        },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            // 세션에 사용자 ID 추가
            session.user.id = token.sub;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };