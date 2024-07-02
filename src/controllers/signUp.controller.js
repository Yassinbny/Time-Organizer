import { request } from "express";
import signUpModel from "../models/signUp.model.js";
import generateToken from "../services/generateToken.js";
import sendMail from "../services/sendMail.js";

export default async function signUpController(req = request, res, next) {
    try {
        
        const {username, email, password} = req.body;

        //Validar lo datos
        if([username, email, password]. includes("" || undefined)){
            let error = new Error("Todos los campos son requeridos");
            error.status= 400;
            throw error;
        }

        //Generar token aleatorio
        const token = generateToken();
        
        const {message} = await signUpModel(username, email, password, token);

        const emailSubject = "Confirma tu registracion en Time Organizer";

        const emailLink = `${req.protocol}://${req.get('host')}/users/confirm?token=${token}`;

        const emailBody = `
        <!DOCTYPE html>
          <html lang="es">
          <body>
              <h2>Bienvenid@ ${username}</h2>
              <h4>Gracias por registrate en Time Organizer</h4>
              <hr>
              <p>Haz click en el siguiente <a href="${emailLink}">enlace</a> para confirmar tu registración</p>
          </body>
          </html>
          `

        await sendMail(email, emailSubject, emailBody);

        return res.status(201).json({
            ok: true,
            message,
        });

    } catch (error) {
        next(error);
    }
}