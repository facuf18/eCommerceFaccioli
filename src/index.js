//1) Necesitamos la variable React en scope
import React from "react";
// const React = require("react")

//2) Necesitamos la varieable ReactDOM en scope
import ReactDOM from "react-dom";

//3) Necesitamos una aplicacion de React
import App from "./App"; //no hace falta agregar la extension si es .js

import "./style.css";
//4) Necesitamos dibujar la aplicacion en el DOM
ReactDOM.render( <App/> , document.getElementById("root"));

