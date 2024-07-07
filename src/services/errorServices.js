
export const notFoundError = (resource) => {
    throw {
        httpStatus: 404, 
        code: "RESOURCE_NOT_FOUND",
        message: `El recurso requerido "${resource}" no existe`,
    };
};

export const recoveryCodeError = () => {
    throw new Error({
        httpStatus: 401, //unauthorized
        code: "INVALID_RECOVERY_CODE",
        message: "Código de recuperación incorrecto. Pruebe de nuevo.",
    });
};
