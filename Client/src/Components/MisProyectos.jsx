import React from 'react';

const MisProyectos = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Mis Proyectos</h2>
      <div className="video-container">
        <iframe
          width="400" // Ajustamos el ancho del video
          height="200" // Ajustamos la altura del video
          src="https://www.youtube.com/embed/PJjFzH9aZUM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MisProyectos;
