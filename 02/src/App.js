import React, { Component } from 'react';

import PropTypes from 'prop-types';


// datos falsos, variando más el tipo de datos
const unaPersona = {
  nombres: "Juan",
  apellidos: "Pérez García",
  edad: 30,
  profesion: "Estudiante",
  escuelas: [
    "Nombre de Primaria",
    "Nombre de Bachillerato",
    "UNAM"
  ],
  casado: false,
  hijos: [
    {
      nombres: "Federico Pedro",
      apellidos: "Pérez Jiménez",
      edad: 6
    },
    {
      nombres: "Ana",
      apellidos: "Pérez Jiménez",
      edad: 8
    }
  ]
};


const Persona = ( props ) => {
  return (
    <article>
      <div>{props.nombres}</div>
      <div>{props.apellidos}</div>
      <div>{props.edad}</div>
      <div>{props.profesion}</div>
      <div>{props.escuelas}</div>
      <div>{props.casado}</div>
    </article>
  )
}

// especificamos el tipo de las propiedades

Persona.propTypes = {
  nombres: PropTypes.string, 
  apellidos: PropTypes.string, 
  edad: PropTypes.number, 
  profesion: PropTypes.string, 
  escuelas: PropTypes.arrayOf(PropTypes.string), 
  casado: PropTypes.bool, 
  // hijos: PropTypes.arrayOf(PropTypes.object), 
  // más detallado:
  hijos: PropTypes.arrayOf(PropTypes.shape({
    nombres: PropTypes.string,
    apellidos: PropTypes.string,
    edad: PropTypes.number
  })), 
};


class App extends Component {
  render() {
    return (
      <div>
        <Persona {...unaPersona}/>
      </div>
    );
  }
}

export default App;
