import { confirmUserModel } from "../../models/users/index.js";

export default async function confirmUserController(req, res, next) {
  try {
    const validationCode = req.params.validationCode;
    console.log(req.params);
    if (!validationCode)
      throw {
        status: 400,
        message: "Token inexistente.",
        code: "BAD REQUEST",
      };
    const { message } = await confirmUserModel(validationCode);

    return res.status(200).json({
      ok: true,
      message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
