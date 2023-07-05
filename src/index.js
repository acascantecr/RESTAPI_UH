const express = require("express");
const app = express();

//Midlewares
app.use(express.json());//para leer datos json y que sea interpetado por js
app.use(express.urlencoded({extend:false}));//proceso el formulario y lo convierte a objeto

// RUTAS
app.use(require('./routes/index'))

app.listen(4000);
console.log('Servidor en puerto 4000');