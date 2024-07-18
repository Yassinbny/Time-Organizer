import getPool from "../db/getpool.js";
import { invalidCredentialsError } from "../services/errorServices.js";

const userExists = async (req, res, next) => {

    try {
        const pool = await getPool();
        
        //Obtener id de usuario.
        const userId = req.user?.id || req.params.userId;

        const [users] = await pool.query(`SELECT user_id FROM users WHERE user_id = ?`, [userId]);
        
        //Si el usuario no existe, lanzamos un error.
        if (!users) {
            return invalidCredentialsError();
        }
        next();
        
    } catch (err) {
        next (err);
    }
};

export default userExists;