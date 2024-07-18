import {hash} from 'bcrypt';
import getPool from '../../db/getpool.js';

export default async function signUpModel (username, email, password, token) {
    try {
        
        const pool = await getPool()

        //Verificar que el usuario no esté ya registrado
        const [[user]] = await pool.query(`SELECT * FROM users WHERE username = ? OR email  ?`, [username, email]);

        if(user) throw {
            status: 400,
            message: "El nombre de usuario o el email ya están en uso.",
            code: "BAD REQUEST"
        }

        //Hashear la contraseña
        const hashedPassword = await hash(password, 10);

        //Registrar el usuario
        await pool.query(
            `INSERT INTO users(username, email, password, token) VALUES(?,?,?,?)`,[username, email, hashedPassword, token]);

        return {
            message: "Usuario creado correctamente. Te llegará un email con el link para completar tu registro.", 
        };
            
    } catch (error) {
        console.log(error)
        throw error
    }
};