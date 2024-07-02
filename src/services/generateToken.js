import CryptoJS from "crypto-js";

export default function generateToken() {
    const token = CryptoJS.randomBytes(15).toString('hex');
    return token
}