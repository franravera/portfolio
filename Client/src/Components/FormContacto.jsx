import React, { useState } from 'react';

const FormContacto = () => {
  const [emailValido, setEmailValido] = useState(true); 
  const [telefonoValido, setTelefonoValido] = useState(true); 

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValido(regex.test(email));
  };

  const handleTelefonoChange = (event) => {
    const telefono = event.target.value;
    const regexTelefono = /^[0-9]{10}$/;
    setTelefonoValido(regexTelefono.test(telefono));
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-3">Formulario de contacto</h2>
      <form id="fs-frm" name="complaint-form" acceptCharset="utf-8" action="https://formspree.io/f/xpzvjoqk" method="post" className="w-full max-w-lg">
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name" className="block text-gray-700 font-bold mb-2">Nombre y Apellido</label>
          <input type="text" name="name" id="full-name" placeholder="Nombre y Apellido" required="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <label htmlFor="empresa-razon" className="block text-gray-700 font-bold mb-2">Empresa o Razón</label>
          <input type="text" name="empresa-razon" id="empresa-razon" placeholder="Empresa o Razón" required="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">Teléfono(no obligatorio)</label>
          <input type="text" name="telefono" id="telefono" placeholder="Teléfono" required="" onChange={handleTelefonoChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${telefonoValido ? '' : 'border-red-500'}`} />
          {!telefonoValido && <p className="text-red-500 text-xs italic">Por favor, ingrese un número de teléfono válido (10 dígitos).</p>}
          <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
          <input type="email" name="_replyto" id="email-address" placeholder="email" required="" onChange={handleEmailChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailValido ? '' : 'border-red-500'}`} />
          {!emailValido && <p className="text-red-500 text-xs italic">Por favor, ingrese un correo electrónico válido.</p>}
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
          <textarea rows="6" name="message" id="message" placeholder="Escribe tu mensaje aquí" required="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Mensaje de Contacto" />
        </fieldset>
        <input type="submit" value="Enviar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      </form>
    </div>
  );
};

export default FormContacto;
