import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { v4 as uuid } from "uuid";
import { PUBLIC_FOLDER } from "../../env.js";
import { uploadFileError, saveFileError, deleteFileError } from "./errorServices.js";


export const saveImageService = async (img, width) => {
  try {
    //Ruta absoluta al directorio de subida de archivos.
    const publicFolder = path.join(process.cwd(), PUBLIC_FOLDER);

    //Acceder o crear la carpeta uploads si no existe.
    try {
      await fs.access(publicFolder);
    } catch {
      await fs.mkdir(publicFolder);
    }

    //Si no hay imagen, lanzamos error de carga.
    if (!img) {
      throw uploadFileError();
    }

    //Generar un nombre único para la imagen.
    const imgName = `${uuid()}.jpg`;

    //Ruta absoluta a la imagen.
    const imgPath = path.join(publicFolder, imgName);

    //Redimensionar la imagen y guardarla.
    await sharp(img.data).resize(width).toFile(imgPath);

    return imgName;

  } catch (err) {
    saveFileError();
  }
};

export const deleteImageService = async (imgName) => {
  try {
    //Ruta absoluta al archivo que queremos eliminar.
    const imgPath = path.join(process.cwd(), PUBLIC_FOLDER, imgName);

    //Comprobamos si la imagen existe, y si no, lanzará un error.
    try {
      await fs.access(imgPath);
    } catch {
      return;
    }

    //Eliminamos el archivo de la carpeta de subida de archivos.
    await fs.unlink(imgPath);

  } catch (err) {
    console.error(err);
    deleteFileError();
  }
};