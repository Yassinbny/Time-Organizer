import nodemailer from 'nodemailer';

import {SMTP_HOST,SMTP_PORT,SMTP_USER,SMTP_PASS} from '../../env.js'

const transporter = nodemailer.createTransport({
    service: 'Brevo',
    host: SMTP_HOST,
    port: SMTP_PORT,
    user: SMTP_USER,
    password: SMTP_PASS
    
});

const sendMail = async (email, subject, body) => {
    try {
        await transporter.sendMail({
            from: SMTP_USER,
            to: email,
            subject,
            html: body
        })

        console.log("email sent")
        
    } catch (error) {
        console.log(error);
    }
}

export default sendMail;