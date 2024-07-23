import generateAdmin from "../utils/generateAdminUser.js";
import getPool from "./getpool.js";

const createTables = async () => {
  try {
    const pool = await getPool();
    await pool.query(
      `DROP TABLE IF EXISTS users, tasks, colors, family, notes, subtask, annotations, evaluations`
    );
    await pool.query(`CREATE TABLE users (
        user_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        avatar VARCHAR(100), 
        imageBoard VARCHAR(100),
        token CHAR(30) NULL,
        enabled BOOLEAN NOT NULL DEFAULT TRUE,
        recoverPassCode VARCHAR(255)  NULL,
        role ENUM('admin', 'normal') DEFAULT 'normal',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
        deletedAt DATETIME NULL
        )`);

    console.log("Tabla de users creada con éxito.");

    await generateAdmin();

    console.log("Usuario Admin creado con éxito.");

    await pool.query(`CREATE TABLE colors (
      color_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
      name ENUM('negro','blanco','verde', 'azul', 'rojo', 'amarillo', 'gris') NOT NULL
    )`);

    console.log("Tabla colors creada con éxito");

    await pool.query(`INSERT INTO colors (name) VALUES 
      ('negro'),
      ('blanco'),
      ('verde'),
      ('azul'),
      ('rojo'),
      ('amarillo'),
      ('gris')
    `);

    console.log("Colores insertados con éxito.");

    await pool.query(`CREATE TABLE tasks (
      task_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
      title VARCHAR(150)  NOT NULL,
      description TEXT NOT NULL,
      start_on DATETIME NOT NULL,
      finish_on DATETIME NOT NULL,
      user_id INT UNSIGNED NOT NULL,
      family_id INT UNSIGNED,
      done BOOLEAN NOT NULL DEFAULT FALSE,
      rating INT UNSIGNED,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (user_id)
    )`);

    console.log("Tabla tasks creada con éxito.");

    await pool.query(`CREATE TABLE family (
    family_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name ENUM('trabajo','deporte','estudios','casa','ocio') NOT NULL,
    color ENUM('negro','blanco','verde','azul','rojo','amarillo','gris') DEFAULT 'blanco' NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`);

    console.log("Tabla family creada con éxito.");

    // Insertar valores en la tabla
    await pool.query(`INSERT INTO family (name, color) VALUES 
  ('trabajo', 'negro'),
  ('deporte', 'blanco'),
  ('estudios', 'verde'),
  ('casa', 'azul'),
  ('ocio', 'rojo')`);

    console.log("Valores insertados en la tabla family con éxito.");

    await pool.query(` CREATE TABLE notes (
    note_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    task_id INT UNSIGNED,
    user_id INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    )`);
    console.log("Tabla notes creada con éxito.");

    await pool.query(`CREATE TABLE subtask (
    subtask_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    task_id INT UNSIGNED NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id))`);

    console.log("Tabla subtask creada con éxito.");

    await pool.query(`CREATE TABLE annotations (
		annotation_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    title varchar(200),
    description TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id))`);

    console.log("Tabla annotations creada con éxito.");

    await pool.query(`CREATE TABLE evaluations (
    evaluation_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    finish_on DATETIME NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id))`);

    console.log("Tabla evaluations creada con éxito.");

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

createTables();
