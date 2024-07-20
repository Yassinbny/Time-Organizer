import { signInModel } from "../../models/auth/index.js";
import Joi from "joi";
export default async function signInController(req, res, next) {
  try {
    const signInValidate = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(200).required(),
    });
    const { error, value } = signInValidate.validate(req.body);
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
