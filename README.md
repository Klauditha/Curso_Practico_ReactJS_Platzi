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

### Agregando compatibilidad con todos los navegadores usando Babel
Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

Instalación de Babel y otras herramientas para que funcione con React:
`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`

Configuración de Babel (.babelrc):
`{`
  `""presets"": [`
    `""@babel/preset-env"",`
    `""@babel/preset-react""`
  `],`
`}`

### Webpack: Empaquetando nuestros módulos
"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:
`npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev`

Configuración de Webpack (webpack.config.js):

`const path = require('path');`
`const HtmlWebpackPlugin = require('html-webpack-plugin');`

`module.exports = {`
  `entry: './src/index.js',`
  `output: {`
    `path: path.resolve(__dirname, 'dist'),`
    `filename: 'bundle.js',`
  `},`
  `resolve: {`
    `extensions: ['.js', '.jsx'],`
  `},`
  `module: {`
    `rules: [`
      `{`
        `test: /\.(js|jsx)$/,`
        `exclude: /node_modules/,`
        `use: {`
          `loader: 'babel-loader',`
        `},`
      `},`
      `{`
        `test: /\.html$/,`
        `use: {`
          `loader: 'html-loader',`
        `},`
      `},`
    `],`
  `},`
  `plugins: [`
    `new HtmlWebpackPlugin({`
      `template: './public/index.html',`
      `filename: './index.html',`
    `}),`
  `],`
`};`

## Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Instalación de Webpack Dev Server:
    `npm install --save-dev webpack-dev-server`

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):
`{`
  `""scripts"": {`
    `""build"": ""webpack --mode production"",`
    `""start"": ""webpack-dev-server --open --mode development""`
  `},`
`}`

## Estilos con SASS
os preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:
`npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader`

Configuración de Sass en Webpack (webpack.config.js):
`const MiniCssExtractPlugin = require('mini-css-extract-plugin');`

`// ...`

`module: {`
  `rules: [`
    `{`
      `test: /\.(s*)css$/,`
      `use: [`
        `{ loader: MiniCssExtractPlugin.loader },`
        `'css-loader',`
        `'sass-loader',`
      `],`
    `}, `
  `],`
`},`

`// ...`

`plugins: [`
  `new MiniCssExtractPlugin({`
    `filename: 'assets/[name].css',`
  `}),`
`],`

## Configuración final: ESLint y Git Ignore
El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.
Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.

Instalación de ESLint:
`npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`

### Configuracion eslintrc: 
https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a 
### Configuracion gitignore Nodetemplate:
https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544


## Añadiendo imágenes con Webpack
File Loader para acceder a las imágenes de nuestro proyecto desde el código.

Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.

Instalación de File Loader:
`npm install --save-dev file-loader`

Configuración de File Loader en Webpack (webpack.config.js):
`rules: [`
  `{`
    `test: /\.(png|gif|jpg)$/,`
    `use: [`
      `{`
        `loader: 'file-loader',`
        `options: { name: 'assets/[hash].[ext]' },`
      `}`
    `],`
  `},`
`],`

Uso de File Loader con React:
`import React from 'react';`
`import nombreDeLaImagen from '../assets/static/nombre-del-archivo';`

`const Component = () => (`
  `<img src={nombreDeLaImagen} />`
`);`

`export default Component;`

## Creando una Fake API
JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro. En este caso el archivo es "initialState.json".

Instalación de JSON Server:
`sudo npm install json-server -g`

Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.

Ejecutar el servidor de JSON Server:
`json-server archivoParaTuAPI.json`

## React Hooks: useEffect y useState
En esta clase el profesor Oscar Barajas nos enseña qué es y cómo implementar React Hooks: una característica de React disponible a partir de la versión 16.8 que nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones.

React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: páginas web, aplicaciones móviles o de escritorio, experiencias de realidad virtual, entre otras.

## React Hooks
Los React Hooks son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).
import React, { useState } from 'react';

`const Component = () => {`
  `const [name, setName] = useState('Nombre por defecto');`

  `return <div>{name}div>;`
`}`

El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.
`import React, { useState, useEffect } from 'react';`

`const Component = () => {`
  `const [name, setName] = useState('Nombre por defecto');`

  `useEffect(() => {`
    `document.title = name;`
    `return () => {`
      `document.title = 'el componente se desmontó';`
    `};`
  `}, [name]);`

  `return <div>{name}div>;`
`}`

No importar las funciones de los hooks desde la librería de React. También puedes usarlos de esta forma: React.useNombreDelHook.

### Custom Hooks
React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones:

* Los hooks siempre deben empezar con la palabra use: useAPI, useMovies, useWhatever.
* Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
* Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.

## PropTypes
Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

Instalación de PropTypes:
`npm install --save prop-types`

Uso de PropTypes:
`import React from 'react';`
`import PropTypes from 'prop-types';`

`const Component = ({ name, lastName, age, list }) => {`
  `// ...`
`};`

`Component.propTypes = {`
  `name: PropTypes.string,`
  `lastName: PropTypes.string,`
  `age: PropTypes.number,`
  `list: PropTypes.array,`
`};`

`export default Component;`

Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.
`Component.propTypes = {`
  `name: PropTypes.string.isRequired, // obligatorio`
  `lastName: PropTypes.string.isRequired, // obligatorio`
  `age: PropTypes.number, // opcional,`
  `list: PropTypes.array, // opcional`
`};`

Mas información: https://es.reactjs.org/docs/typechecking-with-proptypes.html




## Documentacion Ciclo de visa
https://es.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
