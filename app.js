const {imprimirTabla} = require('./helpers/multiplicar');
/*const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')*/
const argv = require('./config/yargs')


imprimirTabla(argv.b,argv.l,argv.h)
    .then(archivo=>console.log(" Archivo creado ",archivo))
    .catch(err=>console.log(err))