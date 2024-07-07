import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde un archivo .env

export default function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ ok: false, error: "No estás autorizado" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ ok: false, error: "Token no válido" });

        req.currentUser = user;
        next();
    });
}
console.log(authenticateToken);