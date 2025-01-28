import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulação de autorização para login por e-mail e senha
        if (credentials?.email === "test@test.com" && credentials.password === "123456") {
          return { id: "1", name: "Test User", email: "test@test.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/cadastro",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }:any) {
      session.user.id = token.id;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
