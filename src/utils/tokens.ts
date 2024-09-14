import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

import { APP_SECRET_KEY } from '../config';


const setEncryptedCookie = (key: string, value: object) => {
    try {
        const stringifiedValue = JSON.stringify(value);
        const encryptedValue = CryptoJS.AES.encrypt(stringifiedValue, key).toString();
        Cookies.set(key, encryptedValue, { expires: 7, secure: true });
    } catch (error) {
        console.error("Error setting encrypted cookie:", error);
    }
};



const getDecryptedCookie = (key: string) => {
    const encryptedValue = Cookies.get(key);
    if (encryptedValue) {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedValue, key);
            const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);

            // Ensure that the decrypted value is valid JSON before parsing
            if (decryptedValue) {
                return JSON.parse(decryptedValue);
            } else {
                console.error("Decrypted value is empty or not valid JSON.");
                return null;
            }
        } catch (error) {
            console.error("Error decrypting cookie:", error);
            return null;
        }
    }
    return null;
};


const removeCookie = () => {
    Cookies.remove(APP_SECRET_KEY, { secure: true });
};

export { setEncryptedCookie, getDecryptedCookie, removeCookie }