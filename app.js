// const { Router } = require('express');
const express = require('express');
const app = express();

const {infoCursos} = require ('./datos/cursos.js');

// router
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);


//Routing:
app.get('./', (req,res)=> {
  res.send('mi primer servidor.cursos');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);      
});


