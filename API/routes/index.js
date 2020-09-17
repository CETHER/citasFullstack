const express = require('express');
const router = express.Router();

const controlPaciente = require('../controllers/controlPaciente');

module.exports = function() {

  // Agrega nuevos pacientes via POST
  router.post('/pacientes',
    controlPaciente.nuevoCliente
  );

  // Obtiene todos los pacientes en la base de datos
  router.get('/pacientes',
    controlPaciente.obtenerPacientes
  );

  // Obtiene paciente por medio de un ID
  router.get('/pacientes/:id', 
    controlPaciente.obtenerPaciente
  );
  
  // Actualizar un registro con un ID específico
  router.put('/pacientes/:id', 
    controlPaciente.actualizarPaciente
  );

  // Elimina un paciente por su ID
  router.delete('/pacientes/:id',
    controlPaciente.eliminarPaciente
  )

  return router;
}