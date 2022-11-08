const express = require('express');

const{programacion} = require('../datos/cursos.js').infoCursos;

//router
const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json());

//cursos de programacion
routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`no se encontraron cursos de ${lenguaje}`);
    }
    if(req.query.ordenar === 'vistas'){
     return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
    res.send(JSON.stringify(resultados));
});

//usando 2 parametros.
rauterMatematicas.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if ( resultados.length === 0){
        return res.status(404).send(`no se encontraron cursos de  ${lenguaje} de nivel ${nivel}`)
    }
    res.send(JSON.stringify(resultados));
});

//metodo post
routerProgramacion.post('/', (req,res)=>{
   let cursoNuevo = req.body;
   programacion.push(cursoNuevo);
   res.send(JSON.stringify);
});
//metodo put
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(programacion));
});

//
routerProgramacion.patch('/',(req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    
    res.send(JSON.stringify(programacion));
});


module.exports = routerProgramacion;