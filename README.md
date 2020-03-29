# Curso Practico ReactJS en Platzi

## Create React App y Tipos de Componentes

### Inicializacion de un Proyecto en Reac

npx create-react-app nombre-de-tu-proyecto , con plantilla por defecto

npm start , Iniciar en el servidor de desarrollo.

### Creación de Componentes
* Deben comenzar con mayusculas (Pascal Case o Upper Camel Case)

* Componentes Stateful son los mas robustos. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida.

`import React, { Component } from 'react';`

`class Stateful extends Component {`
` constructor(props) {`
    `super(props);`
    `this.state = { hello: 'hello world' }; `
  `}`

  `render() {`
   ` return (`
      `<h1>{this.state.hello}h1>`
    `);`
  `}`
`}`

`export default Stateful;'`

* Los componentes Statless o Presentacionales permiten crear funciones que devuelven codigo en formato JSX:

`'import React from 'react';`

`const Stateless = () => {`
  `return (`
    `<h1>¡Hola!</h1>`
  `);`
`}`

// Otra forma de crearlos:
`const Stateless = () => <h1>¡Hola!h1>;`

`export default Stateless;'`

## JSX: JavaScript + HTML
React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar.

## Props: Comunicación entre ComponentesProps: Comunicación entre Componentes
Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

`// Button.jsx`
`import React from 'react';`

`const Button = props => {`
  `return (`
    `<div>`
      `<button type="button">{props.text}</button>`
    `</div>`
  `);`
`};`

`export default Button;`

`// index.jsx`
`import React from 'react';`
`import Button from './components/Button';`

`ReactDOM.render(`
  `<Button text="¡Hola!" />,`
  `document.getElementByid('root'),`
`);`

## Metodos del ciclo de vida
Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

#### Constructor()
Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

#### getDerivedStateFromProps()
Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles

#### render()
Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

#### ComponentDidMount()
Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

### Actualización
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

#### getDerivedStateFromProps()
Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

#### shouldComponentUpdate()
Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

#### render()
Se llama el método render que representa los cambios en el DOM.

#### componentDidUpdate()
Invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

### Desmontaje
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

#### componentWillUnmount()
Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

#### getDerivedStateFromError()
Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

#### componentDidCatch()
Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

## State - Events
"React nos permite responder a las interacciones de los usuarios con propiedades como onClick, onChange, onKeyPress, onFocus, onScroll, entre otras.
Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

`class Button extends React.Component {`
  `state = { count: 0 }`

  `handleClick = () => (`
     `this.setState({ count: this.state.count + 1 })`
  `);`

  `render() {`
    `const { count } = this.state;`
    `return (`
      `<div>`
        `<h1>Manzanas: {count}</h1>`
        `<button onClick{this.handleClick}>Sumar</button>`
      `</div>`
    `);`
  `}`
`}`

## Instalación y configuración de entorno
Iniciar repositorio en GIT:
    `git init`

Iniciar un proyecto de Node.js:
    `npm init -y`

Instalar React:
    `npm install --save react react-dom`



