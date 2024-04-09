const crearArchivo = require("./05");
const colors = require('colors');
const argv = require('./yargs');

console.clear();

//*trabajar con argumentos que vienen por consola
//* console.log(process.argv); devolvera array [ruta de node instalado, ruta de la app, argumentos si es q ejecuto "node app -argumento"]
//* const [ , ,arg3='base=5'] = process.argv; extraigo la base desestructurando arreglo, pos 2, y valor x defecto sera base=5
//* const [ ,base = 5] = arg3.split('='); separo con = base y numero para q devuelva solo el numero, 5 si no viene argumento para q no de undefined
//* console.log(arg3);
//* console.log(base);
//* const base = 17;
//* console.log(process.argv); 
//* console.log('base yargs: ', argv.base);

console.log(argv); //muestra el argv de yargs

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada' .red))
    .catch (err => console.log(err));