const colors = require('colors/safe');
const logica = (base, limite) => {
    let resultado = '';

    for (let i = 1; i <= limite; i++) {
        resultado += base + colors.red('*') + i + colors.magenta('=') + base * i + '\n';
    }

    return resultado;
}
module.exports = {
    logica
}