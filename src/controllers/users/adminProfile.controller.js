import { adminProfileModel } from "../../models/users/index.js";


const adminProfileController = async (req, res, next) => {
  try {
    //Token autentificación.
    const userId = req.currentUser.id;

    const users = await adminProfileModel(userId);

    if (!users) {
        return notFoundError("administrador");
    }

    res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    next(error);
  }
}

export default adminProfileController;
