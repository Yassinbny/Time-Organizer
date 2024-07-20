import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno desde un archivo .env

export default function authenticateToken(req, res, next) {
  try {
    // Siempre debemos enviar el token a través de la propiedad "Authorization" de los headers.
    // Aunque la propiedad "Authorization" se escriba con "A" mayúscula, en node la recibimos
    // con la "a" minúscula.
    const { authorization } = req.headers;
    

    if (!authorization) {
      throw {
        httpStatus: 401, // Unauthorized
        code: "NOT_AUTHENTICATED",
        message: `No estas logueado`,
      };
    }

    // Variable que almacenará la info del token.
    let tokenInfo;

    try {
      tokenInfo = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      throw {
        httpStatus: 401, // Unauthorized
        code: "INVALID_TOKEN",
        message: "Token inválido",
      };
    }

    // Si hemos llegado hasta aquí quiere decir que el token ya se ha desencriptado.
    // Creamos la propiedad "user" en el objeto "request" (es una propiedad inventada).
    req.currentUser = tokenInfo;

    // Pasamos el control a la siguiente función controladora.
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}
console.log(authenticateToken);
