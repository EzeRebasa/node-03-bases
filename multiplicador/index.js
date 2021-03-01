const fs = require('fs');
const {logica} = require('./logica');
const multiplicar = (base) => {

    console.log(`=================`);
    console.log(`Tabla del ${base}`);
    console.log(`=================`);

    const resultado = logica(base);
   
    console.log(resultado);
    const nombreArchivo = `tabla-del-${base}`;
    // fs.writeFileSync(`tablas/tabla-del-${base}`, resultado); // Sincrono
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (error) => {
        if(error) {
            throw error;
        } else {
            console.log(`El archivo tabla-del-${base} fue creado!`);
        }            
    });
}
module.exports = {
    multiplicar
}