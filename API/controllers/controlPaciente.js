const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  //TO DO: Insertar en la base de datos

  // crear objeto de paciente con datos de req.body
  const paciente = new Paciente(req.body);
  try {
    await paciente.save();
    //console.log(req.body);
    res.json({mensaje: 'El Cliente se agregó correctamente'});
  } catch (error) {
    console.log(error);
    next();
  }
}

//Obtener todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
}

//Obtiene un paciente por medio de un ID
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
}

// Actualiza la información de un paciente
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
}
