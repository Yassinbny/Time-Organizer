import { signInModel } from "../../models/auth/index.js";
import signInSchema from "../../validations/signInSchema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../env.js";

export default async function signInController(req, res, next) {
  try {
    // Validar el cuerpo de la solicitud con el esquema
    const { error, value } = signInSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: "Los datos introducidos son incorrectos.",
      });
    }

    const { email, password } = value;
    const { user } = await signInModel(email, password);

    // Verificar si el usuario tiene un token pendiente
    if (user && user.token) {
      return res.status(400).json({
        ok: false,
        message:
          "Es necesario confirmar el usuario. Por favor, revisa tu correo electrónico para confirmar tu cuenta.",
      });
    }

    // Verificar si el usuario existe
    if (!user) {
      return res.status(400).json({
        ok: false,
        message: "el usuario no existe",
      });
    }

    // Verificar la contraseña si el usuario no tiene token
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        ok: false,
        message: "Los datos introducidos son incorrectos.",
      });
    }

    // Generar el token JWT si el usuario está confirmado y la contraseña es correcta
    const jwtToken = jwt.sign(
      {
        id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
        enabled: user.enabled,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    return res.status(200).json({
      ok: true,
      token: jwtToken,
      message: "Bienvenido a Time Organizer ⏰.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
