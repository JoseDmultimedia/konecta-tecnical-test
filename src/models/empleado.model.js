const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/connection.js");

const Empleado = sequelize.define(
  "Empleado",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true 
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
    }
  },
  { tableName: "empleado" }
);


module.exports = {
  Empleado,
};
