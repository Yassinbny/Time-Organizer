import {hash} from 'bcrypt';
import getPool from '../../db/getpool.js';
import { userDataError } from '../../services/errorServices.js';

export default async function signUpModel (username, email, password, signUpCode) {
    try {
        
        const pool = await getPool()

        //Verificar que el usuario no esté ya registrado.
        const [[user]] = await pool.query(`SELECT * FROM users WHERE username = ? OR email = ?`, [username, email]);

        if(user) {
            return userDataError();
        }

        //Hashear la contraseña.
        const hashedPassword = await hash(password, 10);

        //Registrar el usuario.
        await pool.query(
            `INSERT INTO users(username, email, password, token) VALUES(?,?,?,?)`,[username, email, hashedPassword, signUpCode]);

        return {
            message: "Usuario creado correctamente. Te llegará un email con el link para completar tu registro.", 
        };
            
    } catch (error) {
        console.log(error)
        throw error
    }
};