import { signInModel } from "../../models/auth/index.js";
import signInSchema from "../../validations/signInSchema.js";

export default async function signInController(req, res, next) {
  try {
    // Validar el cuerpo de la solicitud con el esquema
    const { error, value } = signInSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { email, password } = value;
    const { token } = await signInModel(email, password);

    return res.status(200).json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
