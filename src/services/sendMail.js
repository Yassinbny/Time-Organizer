import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from "../../env.js";

const transporter = nodemailer.createTransport({
  service: "Brevo",
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
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
    console.log(error);
  }
};

export default sendMail;
