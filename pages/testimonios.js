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




            </div>
            <iframe height="800px" id='testimonialto-portiseguros-tag-all-light-animated' src="https://embed-v2.testimonial.to/w/portiseguros?animated=on&theme=light&shadowColor=444cf7&speed=0.75&hideDate=on&hideSource&tag=all&showHeartAnim" frameborder="0" scrolling="no" width="100%"></iframe>
            <div className=' my-14 flex flex-row items-center justify-center'>
                <a className=' text-white font-bold text-xl text-center p-5 rounded-lg bg-sky-600' href='https://www.google.com/search?q=portiseguros+google+maps&rlz=1C1VDKB_esMX1068MX1068&oq=portiseguros+google+maps&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDQ4ODNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x86ea437103ecc5b9:0xc7c0c950a9cb4843,3,,,,' target="_blank"> Escribe aqui tu opinion</a>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default testimonios
