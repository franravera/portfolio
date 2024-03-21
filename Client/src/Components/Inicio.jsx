import React, { useState } from 'react';
import MisProyectos from './MisProyectos';
import FormContacto from './FormContacto';
import RedesSociales from './RedesSociales'; // Importamos el componente de los iconos
import { FaMoon, FaSun } from "react-icons/fa";

const Inicio = () => {
  const [modoOscuro, setModoOscuro] = useState(true);

  const alternarModoColor = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={`min-h-screen ${modoOscuro ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-end px-4 py-2">
        <button onClick={alternarModoColor} className={`font-semibold px-4 py-2 rounded hover:bg-gray-200 ${modoOscuro ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          {modoOscuro ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-1/2 md:pl-8 lg:pl-24 xl:pl-32 mt-0.5"> {/* Ajuste de márgenes para mover la foto hacia la derecha en pantallas grandes */}
            <img className="w-64 h-64 rounded-lg object-cover" src="../image/CARLITOS.jpeg" alt="Tu Foto" />
          </div>
          <div className="md:w-1/2 md:pr-8 mt-0"> {/* Ajuste de margen para reducir el espacio entre la foto y el formulario */}
            <h2 className="text-3xl font-bold mb-4">¡Hola, soy Franco!</h2>
            <p className={`text-lg mb-4 ${modoOscuro ? 'text-white' : 'text-gray-700'}`}>Soy un apasionado Full Stack Development, con conocimientos en JavaScript, CSS, React.js, Redux, Tailwind, Node.JS, Express, Sequelize, SQL.

Mi enfoque es crear experiencias web cautivadoras y funcionales. Si deseas contactarme, completa el formulario o encuéntrame en mis redes al final de la página.

¡Estoy listo para colaborar en tu próximo proyecto y llevarlo al siguiente nivel!</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center mt-4 lg:mt-8"> {/* Ajuste para que "Mis Proyectos" esté dentro del mismo contenedor flex */}
          <div className="md:w-1/2 md:pl-12 lg:pl-24"> {/* Ajuste de margen para mover "Mis Proyectos" a la derecha */}
            <MisProyectos/>
          </div>
          <div className="md:w-1/2 md:pr-8 lg:pr-24 xl:pr-32 mt-0"> {/* Ajuste de margen para el formulario */}
            <FormContacto/>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <RedesSociales modoOscuro={modoOscuro} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;

