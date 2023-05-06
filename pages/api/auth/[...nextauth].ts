import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: `345433280881-t1blvfjsg7rjsq7corcbevgu0eplbg5r.apps.googleusercontent.com`,
      clientSecret: `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`,
    })
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
