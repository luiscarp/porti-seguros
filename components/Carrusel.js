
import { Carousel } from 'flowbite-react';

import React from 'react'

function Carrusel() {
    return (
        <div className="h-56 sm:h-64 md:w-4/5 md:h-screen md:object-cover md:mx-auto ">
            <Carousel slideInterval={5000}>
                <img src="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1706405848/claudiapacheco_lrwbdu.jpg" alt="..." />
                <img src="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1706407833/tioantonio2_id734a.jpg" alt="..." />
                <img src="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1706399176/esloganEquipoCompleto_kfhnug.webp" alt="..." />
                <img src="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1706405503/protegiendo_momentos_asegurando_sonrisas_waimjv.jpg" alt="..." />
                
                <img src="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1706408862/ubicanos_ekq60w.jpg" alt="..." />
            </Carousel>
        </div>
    )
}

export default Carrusel




