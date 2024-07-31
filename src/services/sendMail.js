import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from "../../env.js";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true, // Habilitar logs
  debug: true,  // Habilitar depuración
});

const sendMail = async (email, subject, body) => {
  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: email,
      subject,
      html: body,
    });

    console.log("Email enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

export default sendMail;
