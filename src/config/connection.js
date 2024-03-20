const { Sequelize } = require('sequelize');

const database = "konecta_test";
const username = "postgres";
const password = "joedev";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}