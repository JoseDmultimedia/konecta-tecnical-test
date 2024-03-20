const { Empleado } = require('../models/empleado.model.js');


const getAll = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getById = async (req, res) => {
    const {id} = req.params;
    try {
        const empleado = await Empleado.findOne({where : {id : id}});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'});
    }
};

const create = async (req, res) => {
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

const update = async (req, res) => {
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
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'})
    }
};

const del = async (req, res) => {
    const {id} = req.params;
    try {
        const empleadoFound = await Empleado.findByPk(id);
        if(!empleadoFound){
            return res.status(400).json({message : 'Empleado no encontrado'});
        }
        empleadoFound.destroy();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server error'})
    }
}



module.exports = {
    getAll,
    getById,
    create,
    update,
    del
};