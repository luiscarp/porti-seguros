import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

import React from 'react'

function cotiza() {
    return (
        <div>
                        <Head>
                <link rel="icon" href="/logopestana.png" />
            </Head>
            <NextSeo
                title="PorTi Seguros"
                description="Por Ti seguros, ubicados en Chihuahua, somos agentes de seguros dedicados a vender todo tipo de seguros de auto, daños, de vida, gastos médicos mayores, uber, didi, somos asesores profesionales en el area"
                openGraph={{
                    title: 'PorTi Seguros',
                    description: 'Por Ti seguros, ubicados en Chihuahua, somos agentes de seguros dedicados a vender todo tipo de seguros de auto, daños, de vida, gastos médicos mayores, uber, didi, somos asesores profesionales en el area',
                    // Aquí puedes añadir más configuraciones de Open Graph si lo necesitas
                }}
            />
            <Navbar cotiza="True"></Navbar>
            <div className='mb-1 md:mb-8 mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                <h1 className=' text-center'>Ingresa a nuestro</h1>

                <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>Cotizador en linea</h1>

                <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>SITIO EN CONSTRUCCION</h1>


            </div>
            <Footer></Footer>

        </div>
    )
}

export default cotiza
