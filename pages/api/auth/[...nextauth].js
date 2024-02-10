// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configura uno o más proveedores de autenticación
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      // Puedes añadir más proveedores aquí
    ],
  
    // Opcional: configura una base de datos para almacenar sesiones, usuarios, etc.
    
  })