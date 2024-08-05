import { profileModel } from "../../models/users/index.js";


const profileController = async (req, res, next) => {
  try {
    //Token autentificación.
    const userId = req.currentUser.id;

    const [users] = await profileModel(userId);

    if (!users) {
        return notFoundError("usuario");
    }

    res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    next(error);
  }
}

export default profileController;
