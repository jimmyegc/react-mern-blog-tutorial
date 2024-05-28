/*
// MySQL
import { Sequelize } from "sequelize";

const db = new Sequelize("db_mern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
*/

import mongoose from "mongoose";
const url = "mongodb://localhost:27017/mern_db";
mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Conectado a MongoDB");
});
db.on("error", () => {
  console.log("Error al conectarse a MongoDB");
});

export default db;
