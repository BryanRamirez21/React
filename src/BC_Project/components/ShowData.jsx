import React from 'react';

const ShowData = ({ data }) => {
  const { nombre_procesado, rfc } = data;

  return (
    <div>
      <h3><b>Nombre: </b>{nombre_procesado}</h3>
      <h3><b>RFC: </b>{rfc}</h3>
    </div>
  );
};

export default ShowData;
