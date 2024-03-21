import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const RedesSociales = ({ modoOscuro }) => {
  return (
    <div className="flex justify-center mt-4">
      <a href="https://github.com/franravera" target="_blank" rel="noopener noreferrer" className={`p-2 bg-gray-800 hover:bg-gray-700 mr-2`} title="GitHub Profile">
        <FaGithub size={36} color={modoOscuro ? 'white' : 'black'} className="rounded-none" />
      </a>
      <a href="https://www.linkedin.com/in/francomatiasravera/" target="_blank" rel="noopener noreferrer" className={`p-2 bg-blue-500 hover:bg-blue-600 mr-2`} title="LinkedIn Profile">
        <FaLinkedin size={38} color={modoOscuro ? 'white' : 'black'} className="rounded-none" />
      </a>
      <a href="https://wa.me/5493435210006" target="_blank" rel="noopener noreferrer" className={`p-2 bg-green-500 hover:bg-green-600 mr-2`} title="WhatsApp">
        <FaWhatsapp size={38} color={modoOscuro ? 'white' : 'black'} className="rounded-none" />
      </a>
      <a href="https://www.instagram.com/frannravera" target="_blank" rel="noopener noreferrer" className={`p-2 bg-pink-500 hover:bg-pink-600`} title="Instagram Profile">
        <FaInstagram size={38} color={modoOscuro ? 'white' : 'black'} className="rounded-none" />
      </a>
    </div>
  );
};

export default RedesSociales;
