import { deleteUserModel } from "../../models/users/index.js";

export default async function deleteUserController(req, res, next) {
  try {
    const { username } = req.params; // o req.body si prefieres
    const { message } = await deleteUserModel(username);

    return res.status(200).json({
      ok: true,
      message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
