const crypto = require("crypto");

const password = "hardcodedkey";
const algorithm = "aes-256-cbc";


const key = crypto.scryptSync(password, 'salt', 32);
const iv = Buffer.alloc(16, 0);

exports.encrypt = function (text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return encrypted;
}
