const fs = require('fs');
const imprimirTabla = async(valor=5,listar,hasta=9) =>{
    console.clear();
   
    let salida = "";
    for(let numero=1;numero<=hasta; numero++){
       salida+= `${valor} x ${numero} = ${numero*valor} \n`;
       
    }
    if(listar){
        console.log(salida);
    }
    try{
        const nombreArchivo = `tabla-${valor}.txt`; 
        fs.writeFileSync(`./archivos/${nombreArchivo}`,salida);
        return nombreArchivo;

    }
    catch(err){
        throw err;
    }
}
module.exports = {
   imprimirTabla
}