import listUsersModel from "../../models/users/listUsers.model.js";

export default async function listUsersController(req, res, next) {
    try {
        const users = await listUsersModel();
        return res.status(200).json({
            ok: true,
            users
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
