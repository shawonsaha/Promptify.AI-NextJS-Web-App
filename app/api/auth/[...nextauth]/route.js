import NextAuth from "next-auth";
import GoogleProviver from "next-auth/providers";

const handler = NextAuth({
  providers: [
    GoogleProviver({
      clientId: "",
      clientSecret: "",
    }),
  ],

  async session({ session }) {},

  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
