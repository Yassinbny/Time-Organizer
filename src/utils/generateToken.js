import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde un archivo .env

const adminUser = {
    username: 'admin',
    role: 'admin'
};

const token = jwt.sign(adminUser, process.env.JWT_SECRET, { expiresIn: '1h' });
console.log(token);
