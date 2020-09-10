const express = require('express');
const router = express.Router();

const controlPaciente = require('../controllers/controlPaciente');

module.exports = function() {

  // Agrega nuevos pacientes via POST
  router.post('/pacientes',
    controlPaciente.nuevoCliente
  )
  return router;
}