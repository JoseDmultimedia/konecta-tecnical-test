const { Router } = require("express");
const router = Router();
const {
    getAllSolicitud,
    getByIdSolicitud,
    createSolicitud,
    updateSolicitud,
    delSolicitud
} = require("../controller/solicitudController.js");
const baseApi = '/konecta-test/v1';

router.get(`${baseApi}/solicitud`, getAllSolicitud);
router.get(`${baseApi}/solicitud/:id`, getByIdSolicitud);
router.post(`${baseApi}/solicitud`, createSolicitud);
router.put(`${baseApi}/solicitud/:id`, updateSolicitud);
router.delete(`${baseApi}/solicitud/:id`, delSolicitud);


module.exports = router;