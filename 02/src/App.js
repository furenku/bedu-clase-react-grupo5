import React, { Component } from 'react';

import PropTypes from 'prop-types';


// datos falsos, variando más el tipo de datos
const unaPersonaFalsa = {
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
    },
    {
      nombres: "Ignacio",
      apellidos: "Pérez Jiménez",
      edad: 12
    }
  ]
};

/*
un componente de clase
usado para explicar qué es el estado de un componente
no debería hacerse algo así, sino preferirse
la metodología "Smart vs Dumb Componentes como se implementa
abajo en ContenedorPersona
*/
/*
class PersonaConEstado extends React.Component {
  
  state = {
    edad: 31
  }
  
  render = () => {

    return (
      <article>
        <div>{this.state.edad}</div>
  
        <button onClick={ () => {

          let edadActual = this.state.edad;
          edadActual++
          
          this.setState({
            edad: edadActual
          })
          
        } }>
          Incrementar 
        </button>
  
      </article>
    )
  }


} 
*/


const Persona = ( props ) => {

  // primero construimos las listas,
  // puesto que no podemos armarlas dentro de 'return'


  let listaEscuelas = props.escuelas.map( (escuela, indice) => {
    return (
      <li key={indice}>
        {escuela}
      </li>
    )
  })
  
  let listaHijos = props.hijos.map( (hijo, indice) => {
    return (
      <li key={indice}>
        <div>
          { hijo.nombres } { hijo.apellidos }
        </div>
        <div>
          { hijo.edad } años
        </div>
      </li>
    )
  })

  return (
    <article>
      <div>{props.nombres} {props.apellidos}</div>
      <div>{props.edad} años</div>

      <button onClick={ () => props.alIncrementarEdad() }>
        Incrementar Edad
      </button>

      <div>{props.profesion}</div>

      <div>{props.casado}</div>

      <h4>Escuelas</h4>

      <ul>
        { listaEscuelas }
      </ul>

      <h4>Hijos</h4>

      <ul>
        { listaHijos }
      </ul>


    </article>
  )
}
/*
A continuación, veremos
dos opciones de estructura de datos del estado,
una más simple (habilitada)
vs. una más compleja con jerarquía (en comentarios)
*/

class ContenedorPersonas extends React.Component {
  
  state = unaPersonaFalsa;
 
  // state = {
  //   persona: unaPersonaFalsa
  // };


  render = () => {
    
    return (
      <div>
        <Persona
        {...this.state}
        alIncrementarEdad={ () => this.incrementarEdad() }
        />
        {/* <Persona
        {...this.state.persona}
        alIncrementarEdad={ () => this.incrementarEdad() }
        /> */}
      </div>
    )
  }

  
  incrementarEdad = () => {
    
    let edadActual = this.state.edad;

    edadActual++;

    this.setState({
      edad: edadActual
    }); 
    
  }
  
  /*
  
  incrementarEdad = () => {
    
    let personaEnEstado = this.state.persona;

    let edadActual = personaEnEstado.edad;

    edadActual++;

    personaEnEstado.edad = edadActual;

    this.setState({
      persona: personaEnEstado
    }); 
  }
  
  */

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

  // alIncrementarEdad: PropTypes.func
};


class App extends Component {
  render() {
    return (
      <div>
        {/* <Persona {...unaPersonaFalsa}/> */}
        <ContenedorPersonas/>
      </div>
    );
  }
}

export default App;
