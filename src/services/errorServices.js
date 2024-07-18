
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

export const userDataError = () => {
    throw {
        httpStatus: 400,
        code: "BAD_REQUEST",
        message: "El nombre de usuario o el email ya están en uso."
    }
};

export const invalidCredentialsError = () => {
    throw {
      httpStatus: 401,
      code: "INVALID_CREDENTIALS",
      message: "Credenciales inválidas."
    };
};

export const uploadFileError = () => {
    throw {
        httpStatus: 404, 
        code: "RESOURCE_NOT_FOUND",
        message: `Error al cargar el archivo.`,
    };
};
  
export const saveFileError = () => {
    throw {
        httpStatus: 500, // Internal Server Error
        code: "FILE_SAVE_FAILED",
        message: "Error al guardar el archivo en el disco.",
    };
};
  
export const deleteFileError = () => {
    throw {
        httpStatus: 409, // Conflict
        code: "FILE_DELETED_FAILED",
        message: "Error al eliminar el archivo del disco.",
    };
};