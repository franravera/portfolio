import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Bienvenido a mi portafolio!</h2>
        <p className="text-gray-600 mb-6">¡Hola! Soy Franco, un desarrollador apasionado por la creación de aplicaciones web. En mi portafolio, encontrarás una muestra de mis proyectos y habilidades.</p>
        <p className="text-gray-600 mb-6">¡Echa un vistazo a mi trabajo y no dudes en contactarme si estás interesado en colaborar o tienes alguna pregunta!</p>
        <Link to="/inicio">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">¡Vamos a ello!</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
