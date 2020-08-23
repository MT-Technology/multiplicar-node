const options = {
    base: {
        demand: true,
        alias: 'b',
        description: "Base de la tabla de multiplicar"
    },
    limite: {
        alias: 'l',
        default: 10,
        description: "Limite de la tabla de multiplicar"
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crear un archivo con la tabla de multiplicación', options)
    .help()
    .argv;

module.exports = {
    argv
}