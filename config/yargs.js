const argv = require('yargs')
            .option('b',{
                alias:'base',
                demandOption:true,
                type:'number'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                demandOption:false
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:9,
            })
            
            .check((argv,options)=>{
               if(isNaN(argv.b)){
                throw 'Debe ser un número'
               }
               if(isNaN(argv.h)){
                throw 'El límite debe ser un número'
            }

               return true;
            })
            .argv;
module.exports = argv;