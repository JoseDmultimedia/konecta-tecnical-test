const { Empleado } = require('../models/empleado.model.js');


const getAllEmpleado = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getByIdEmpleado = async (req, res) => {
    const {id} = req.params;
    try {
        const empleado = await Empleado.findOne({where : {id : id}});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'});
    }
};

const getByNameEmpleado = async (req, res) => {
    const {nombre} = req.params;
    try {
        const empleado = await Empleado.findOne({where : {nombre : nombre}});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'});
    }
};

const createEmpleado = async (req, res) => {
    const {fecha_ingreso, nombre, salario} = req.body;
    try {
        const empleadoCreated = await Empleado.create({
            fecha_ingreso : fecha_ingreso,
            nombre : nombre,
            salario : salario
        });
        res.status(200).json({message: 'Empleado creado', data : empleadoCreated});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'})
    }
};

const updateEmpleado = async (req, res) => {
    const {id} = req.params;
    const {fecha_ingreso, nombre, salario} = req.body;
    try {
        const empleadoFound = await Empleado.findByPk(id);
        if(!empleadoFound){
            return res.status(400).json({message : 'Empleado no encontrado'});
        }

        empleadoFound.fecha_ingreso = fecha_ingreso;
        empleadoFound.nombre = nombre;
        empleadoFound.salario = salario;

        await empleadoFound.save();
        res.status(200).json({message: 'Empleado actualizado', data : empleadoFound});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'})
    }
};

const delEmpleado = async (req, res) => {
    const {id} = req.params;
    try {
        const empleadoFound = await Empleado.findByPk(id);
        if(!empleadoFound){
            return res.status(400).json({message : 'Empleado no encontrado'});
        }
        empleadoFound.destroy();
        res.status(200).json({message: 'Empleado eliminado', data : empleadoFound});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'})
    }
}

module.exports = {
    getAllEmpleado,
    getByIdEmpleado,
    createEmpleado,
    updateEmpleado,
    delEmpleado,
    getByNameEmpleado
};