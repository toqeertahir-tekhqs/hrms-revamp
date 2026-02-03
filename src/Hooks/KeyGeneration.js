import CryptoJS from 'crypto-js';

const keyPart1 = import.meta.env.VITE_ENCRYPTION_KEY_PART1;
const keyPart2 = import.meta.env.VITE_ENCRYPTION_KEY_PART2;

const combinedKey = `${keyPart1}_${keyPart2}`;
const encryptionKey = CryptoJS.SHA256(combinedKey)
  .toString(CryptoJS.enc.Hex)
  .slice(0, 32);
const key = CryptoJS.enc.Utf8.parse(encryptionKey);

const ivPart1 = import.meta.env.VITE_ENCRYPTION_IV_PART1;
const ivPart2 = import.meta.env.VITE_ENCRYPTION_IV_PART2;

const combinedIv = `${ivPart1}${ivPart2}`;
const iv = CryptoJS.MD5(combinedIv).toString(CryptoJS.enc.Hex).slice(0, 16);
const ivKey = CryptoJS.enc.Utf8.parse(iv);

export const AES_KEY = key;
export const AES_IV = ivKey;
