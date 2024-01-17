import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <h1 className=' h-screen'>
   <Image 
   src={"/tarjetas-1-Modificada.jpg"}
   alt='Claudia Pacheco Seguros'
   width={500}
   height={300}
   layout='responsive'
   
   
   
   
   
   ></Image>
   
   
   </h1>
  )
}
