export default function isAdmin(req, res, next) {
    if (req.currentUser && req.currentUser.role === 'admin') {
        return next();
    }

    return res.status(403).json({
        ok: false,
        error: "No tienes permisos para realizar esta acción."
    });
}
