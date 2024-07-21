import validateSchema from "../../validations/validateSchema.js";
import { uploadImageSchema } from "../../validations/usersSchema.js";
import selectUserByIdModel from "../../models/users/selectUserId.model.js";
import { saveImageService, deleteImageService } from "../../services/imageServices.js";
import uploadImageModel from "../../models/images/uploadImage.model.js";


const uploadImageController = async (req, res, next) => {
    try {
        const userId = req.currentUser.id;

        const imageFile = req.files.imageBoard;

        //Validamos con Joi
        await validateSchema(uploadImageSchema, req.files || {});

        //Comprobamos si tiene una imagen previa.
        const user = await selectUserByIdModel(userId);

        //Eliminamos la imagen anterior si hubiera.
        if (user && user.imageBoard) {
            await deleteImageService(user.imageBoard);
        }

        //Procesarlo con Sharp y guardar el archivo.
        const imageName = await saveImageService(imageFile, 100);

        //Con el model, actualizamos avatar en DB.
        await uploadImageModel(imageName, userId);

        res.send({
            status: "ok",
            message: "Imagen actualizada con éxito.",
        });

    } catch (err) {
        next (err);
    }
};

export default uploadImageController;