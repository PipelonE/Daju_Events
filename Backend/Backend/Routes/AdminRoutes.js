const express = require("express");
const AController =require('../Controllers/controller');
//const docenteController =require('../Controllers/Docente');
const rutaDatos = express.Router();

rutaDatos.get("/Buscar_evento/:nombre_evento", AController.Buscar_Evento);
rutaDatos.post('/RegistrarEvento', AController.RegistrarEvento);

module.exports=rutaDatos;