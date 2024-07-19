import "dotenv/config.js";

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
export {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  PORT,
  JWT_SECRET,
  SMTP_HOST,
  SMTP_PASS,
  SMTP_PORT,
  SMTP_USER,
  PUBLIC_FOLDER,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_USER,
};
