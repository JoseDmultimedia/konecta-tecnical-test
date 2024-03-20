const { Empleado } = require('../models/empleado.model');


const getAllEmpleados = async (req, res) => {
  try {
    const employees = await Empleado.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    getAllEmpleados,
  
};