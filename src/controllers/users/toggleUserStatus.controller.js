import updateUserStatusModel from "../../models/users/i";

export default async function toggleUserStatusController(req, res, next) {
    const { username } = req.params;
    const { status } = req.body;

    try {
        const { message } = await updateUserStatusModel(username, status);

        return res.status(200).json({
            ok: true,
            message
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

console.log(toggleUserStatusController);