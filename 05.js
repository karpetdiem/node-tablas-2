const fs = require('fs');
const colors= require('colors');

//* 5 por si viene la base vacia sera 5
const crearArchivo = async (base = 5, listar, limite) => { //*con async en vez de promesa, ya retorna una promesa
 //?  return new Promise((res, rej) => {
    try {
        console.clear();

        let salida = '';
        let consola = '';;

        for (let i=1; i<=limite; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('================'.green);
            console.log(`  Tabla del ${base}`);
            console.log('================'.green);
            console.log(consola);
        }
    
        // fs.writeFile(`Tabla del ${base}.txt`, salida, (err)=> { ; //* nombre archivo de salida, lo q insertemos, cb de error
        //     if(err) throw err;
        //     console.log(`Tabla del ${base}.txt creada`);
        // })
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida); //* nombre archivo de salida, lo q insertemos y no lleva cb de error (habria q atraparlo con try catch)

         //? })  res(`Tabla del ${base}.txt`); La promesa retornaba el nombre del archivo
        return `Tabla del ${base}.txt`; //* con async retorna el nombre del archivo
    } catch (err) {
        throw err;
    }
}

module.exports = crearArchivo;