import getPool from "./getpool.js";

const createTables = async () => {
  try {
    const pool = await getPool();
    await pool.query(`DROP TABLE IF EXISTS subtask,notes,family,tasks,users`);
    await pool.query(`CREATE TABLE users (
        user_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        token CHAR(30) NULL,
        enabled BOOLEAN NOT NULL DEFAULT TRUE,
        recoverPassCode VARCHAR(255)  NULL,
        role ENUM('admin', 'normal') DEFAULT 'normal',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
        deletedAt DATETIME NULL
        )`);

    console.log("Tabla de users creada con éxito.");

    await pool.query(
      `INSERT INTO users(username, email, password, role) VALUES ("admin","admin@gmail.com","123456",'admin')`
    );

    console.log("Usuario Admin creado con éxito.");

    await pool.query(`CREATE TABLE tasks (
	task_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
	title VARCHAR(150)  NOT NULL,
	description TEXT NOT NULL,
    start_on DATE NOT NULL,
    finish_on DATE NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    )`);

    console.log("Tabla tasks creada con éxito.");

    await pool.query(`CREATE TABLE family (
    family_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    name ENUM('trabajo','deporte','estudios','casa','ocio')  NOT NULL,
    color  ENUM('negro','blanco','verde','azul','rojo','amarillo','gris') DEFAULT 'blanco' NOT NULL,
	task_id INT UNSIGNED NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id)
    )`);

    console.log("Tabla family creada con éxito.");

    await pool.query(` CREATE TABLE notes (
    note_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    task_id INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id)
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
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

createTables();
