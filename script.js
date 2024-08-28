// script.js

/*
 * Encripta el texto utilizando un método sencillo de sustitución.
 * @param {string} text - El texto a encriptar.
 * @returns {string} - El texto encriptado.
 */
function encrypt(text) {
    const map = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    return text.split('').map(char => map[char] || char).join('');
}

/*
 * Desencripta el texto utilizando el método inverso al de encriptación.
 * @param {string} text - El texto a desencriptar.
 * @returns {string} - El texto desencriptado.
 */
function decrypt(text) {
    const map = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    return text.split('').map(char => map[char] || char).join('');
}


 /* Toma el texto del área de entrada, lo encripta y muestra el resultado en el área de salida.
 */
function encryptText() {
    const input = document.getElementById('input-text').value;
    const output = encrypt(input);
    document.getElementById('output-text').value = output;
}


 /* Toma el texto del área de entrada, lo desencripta y muestra el resultado en el área de salida.
 */
function decryptText() {
    const input = document.getElementById('input-text').value;
    const output = decrypt(input);
    document.getElementById('output-text').value = output;
}
