import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function testimonios() {
    return (
        <div>
            <Navbar testimonios="True"></Navbar>
            <div className='mb-1 md:mb-8 mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                <h1 className=' text-center'>Revisa lo que nuestros clientes</h1>

                <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>Opinan sobre nosotros</h1>

                <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>SITIO EN CONSTRUCCION</h1>


            </div>
            <Footer></Footer>

        </div>
    )
}

export default testimonios
