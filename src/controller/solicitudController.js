const { Empleado } = require('../models/empleado.model.js');
const { Solicitud } = require('../models/solicitud.model.js');

const getAllSolicitud = async (req, res) => {
    try {
        const solicitudes = await Solicitud.findAll({
            include : {
                model : Empleado,
                attributes : ['nombre'],
                as : 'empleado'
            }
        });

        const formatSolicitudes = solicitudes.map(solicitud => ({
            id : solicitud.id,
            codigo : solicitud.codigo,
            resumen : solicitud.resumen,
            descripcion : solicitud.descripcion,
            nombre_empleado : solicitud.empleado.nombre
        }));

        res.json(formatSolicitudes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getByIdSolicitud = async (req, res) => {
    const {id} = req.params;
    try {
        const solicitud = await Solicitud.findByPk(id);
        res.json(solicitud);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createSolicitud = async (req, res) => {
    const {codigo, descripcion, resumen, id_empleado} = req.body;
    try {
        const solicitudCreated = await Solicitud.create({
            codigo : codigo,
            descripcion : descripcion,
            resumen : resumen,
            id_empleado : id_empleado
        });
        res.status(200).json({message: 'Solicitud creada', data : solicitudCreated});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateSolicitud = async (req, res) => {
    const {codigo, descripcion, resumen, id_empleado} = req.body;
    const {id} = req.params;
    try {
        const solicitudFound = await Solicitud.findByPk(id);
        if(!solicitudFound){
            return res.status(400).json({message : 'Solicitud no encontrada'});
        };

        solicitudFound.codigo = codigo;
        solicitudFound.descripcion = descripcion;
        solicitudFound.resumen = resumen;
        solicitudFound.id_empleado = id_empleado;

        solicitudFound.save();

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const delSolicitud = async (req, res) => {
    const {id} = req.params;
    try {
        const solicitudFound = await Solicitud.findByPk(id);
        if(!solicitudFound){
            return res.status(400).json({message : 'Solicitud no encontrada'});
        };
        solicitudFound.destroy();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllSolicitud,
    getByIdSolicitud,
    createSolicitud,
    updateSolicitud,
    delSolicitud
};