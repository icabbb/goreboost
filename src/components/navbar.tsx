import React from 'react'

function NavBoost() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1b1d41] py-4 px-8">
            <ul className="flex justify-center space-x-8">
                <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
                <li><a href="/recomendaciones" className="hover:text-gray-300">Recomendaciones</a></li>
                <li><a href="#comprobantes" className="hover:text-gray-300">Comprobantes</a></li>
                <li><a href="#preguntas-frecuentes" className="hover:text-gray-300">Preguntas frecuentes</a></li>
                <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
                <li><a href="#coaching" className="hover:text-gray-300">Coaching</a></li>
            </ul>
        </nav>
    )
}

export default NavBoost