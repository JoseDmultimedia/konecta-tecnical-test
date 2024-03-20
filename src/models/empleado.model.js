const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/connection.js");

const Empleado = sequelize.define(
  "Empleado",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: "empleado",
  },

  { tableName: "empleado" }
);

module.exports = {
  Empleado,
};
