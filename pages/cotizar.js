import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from "@/components/Seo";

import React from 'react'

function cotiza() {
    return (
        <div>
            <Seo path="/cotizar" />
            <Navbar cotiza="True"></Navbar>
            <div className='mb-1 md:mb-8 mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                <h1 className='text-center'>Ingresa a nuestro <span className='block mt-1 md:mt-4 italic text-amber-500'>cotizador en línea</span></h1>

                <p className='text-center mt-1 md:mt-4 italic text-amber-500'>SITIO EN CONSTRUCCION</p>


            </div>
            <Footer></Footer>

        </div>
    )
}

export default cotiza
