const { Router } = require("express");
const router = Router();
const {
  getAllEmpleado,
  getByIdEmpleado,
  createEmpleado,
  updateEmpleado,
  delEmpleado,
} = require("../controller/empleadoController.js");
const baseApi = '/konecta-test/v1';

router.get(`${baseApi}/empleado`, getAllEmpleado);
router.get(`${baseApi}/empleado/:id`, getByIdEmpleado);
router.post(`${baseApi}/empleado`, createEmpleado);
router.put(`${baseApi}/empleado/:id`, updateEmpleado);
router.delete(`${baseApi}/empleado/:id`, delEmpleado);


module.exports = router;