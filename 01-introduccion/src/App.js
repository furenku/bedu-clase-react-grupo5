import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './ComponenteConEstilosDesdeArchivo.css';




// un Componente funcional. Escrito usando una función en el estilo "antiguo"
const ComponenteFuncional = function( props ) {
  return <p>Un componente funcional. 
    Ejecuta automáticamente la función 'render',
    que está implícita
  </p>
}

// una función utilizando 'arrow functions'
const Reloj = ( props ) => {
  
  return <h1>{props.hora}</h1>

}



// un Objeto que describe una persona.
const unaPersona = {
  nombres: "Juan",
  apellidos: "Pérez García",
  edad: 30,
  profesion: "Estudiante"
};


const PersonaVersionUno = ( props ) => {
  // utilizamos React.Fragment
  // porque return debe devolver un único objeto html,
  // pero no queremos añadir html adicional.
  // React.Fragment desaparece al presentarse en la interfaz
  return (
    <React.Fragment>
      <h1>
       {props.persona.nombres} {props.persona.apellidos}
      </h1>
      <h2>{props.persona.edad} años.</h2>
      <h3>{props.persona.profesion}</h3>
    </React.Fragment>
  );
  

}


const PersonaVersionDos = ( props ) => {
  
  return (
    <React.Fragment>
      <h1>
       {props.nombres} {props.apellidos}
      </h1>
      <h2>{props.edad} años.</h2>
      <h3>{props.profesion}</h3>
    </React.Fragment>
  );
  
}



const ComponenteConEstilosDesdeArchivo = () => {
  // utilizamos estilos declarados
  // en un archivo .css importado arriba.
  return (
    <React.Fragment>
      <h1 className="Titular1">
        Estilos desde Archivo
      </h1>

      <h2 className="Titular2">
        Más Estilos
      </h2>
    </React.Fragment>
  )

}


const ComponenteConEstilosEnLinea = () => {


    const styles = {
      titular1: {
        backgroundColor: 'green',
        color: 'white' 
      },
      titular2: {
        backgroundColor: 'blue',
        color: 'red' 
      }
    }

    return (
      <React.Fragment>
        <h1 style={styles.titular1}>
          Estilos en Línea
        </h1>

        <h2 style={styles.titular2}>
          Más Estilos
        </h2>
      </React.Fragment>
    )

}


/*
Un Componente de Clase. puede tener más métodos que sólo render,
y dicha función 'render' debe ser declarada explícitamente
*/
class App extends Component {
  render() {
    return (
      <div>
        
        <ComponenteFuncional/>

        <ComponenteConEstilosDesdeArchivo/>
        <ComponenteConEstilosEnLinea/>

        <Reloj hora={this.obtenerHora()}/>
        
        <PersonaVersionUno persona={unaPersona}/>
        
        <PersonaVersionDos
          nombres={unaPersona.nombres}
          apellidos={unaPersona.apellidos}
          edad={unaPersona.edad}
          profesion={unaPersona.profesion}
        />
        
        {
        /*
        WARNING: tip avanzado!
        versión descomponiendo el objeto 'unaPersona'
        utilizando el operador spread: ...
        Es equivalente a la versión anterior
        */
        }
        <PersonaVersionDos {...unaPersona}/>
        
      </div>
    );

  }

  obtenerHora() {

    let hora = new Date();
    hora = hora.toLocaleTimeString();
    
    return hora

  }


}

export default App;
