const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica');
const multiplicar = (base, limite, visualizar) => {
    
    const resultado = logica(base,limite);

    if(visualizar){
        console.log(`=================`.blue);
        console.log(`Tabla del ${base}`.yellow);
        console.log(`=================`.blue);
        console.log(resultado);
    }

    const nombreArchivo = `tabla-del-${base}.txt`;
    // fs.writeFileSync(`tablas/tabla-del-${base}`, resultado); // Sincrono
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (error) => {
        if(error) {
            throw error;
        } else {
            console.log(`El archivo ${nombreArchivo} fue creado!`.rainbow);
        }            
    });
}
module.exports = {
    multiplicar
}