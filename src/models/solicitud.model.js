const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/connection");
const { Empleado } = require("./empleado.model.js");

const Solicitud = sequelize.define(
  "Solicitud",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true 
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_empleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },
  { tableName: "solicitud" }
);

Solicitud.belongsTo(Empleado, {
    foreignKey: "id_empleado",
  });

module.exports = {
    Solicitud,
};
