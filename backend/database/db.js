import { Sequelize } from "sequelize";

const db = new Sequelize("db_mern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
