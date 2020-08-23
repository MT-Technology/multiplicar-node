let fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let content = '';
        for (let i = 1; i <= limite; i++) {
            content += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(content));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            }
        });

    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        console.log('================'.green);
        console.log(`tabla del ${base}`.green);
        console.log('================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
        resolve()
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}