import { createPool } from "mysql2/promise.js";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;
let pool;

const getPool = async () => {
  try {
    if (!pool) {
      pool = createPool({
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
      });
      await pool.query(`CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}`);
      pool = createPool({
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_DATABASE,
      });
    }

    return pool;
  } catch (error) {
    console.log(error);
  }
};
console.log("Se está creando la conexión.");

export default getPool;
