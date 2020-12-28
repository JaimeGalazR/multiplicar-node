const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then((resultado) => {
                console.log(resultado.red);
            })
            .catch((err) => console.log(err));
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch((err) => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
}

// let base = 1;

// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);
// console.log(argv2);

// crearArchivo(base).then((archivo) => {
//     console.log(`Archivo creado: ${ archivo }`);
// }).catch(err => console.log(err));