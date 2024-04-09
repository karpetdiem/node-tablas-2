const argv = require("yargs")
    .option("b", {   //*alias del file, f y file van a ser lo mismo
        alias: "base",
        type: "number",
        demandOption: true, //el argumento va a ser obligatorio
        describe: "Mando como parámetro la base para las tablas de multiplicar"
    })
 
    .option("l", {   
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola" //app node –help muestra como descripción de la app en ayuda
    })
 
    .option("h", {   
        alias: "hasta",
        type: "number",
        demandOption: false,
        default: false,
        describe: "Limite de la tabla" 
    })
 
    .check( (argv, options) => { //método q verifica q ciertas condiciones se cumplan
       if ( isNaN(argv.b) || isNaN(argv.h)) { // si el arg no es número
         throw "La base y el limite deben ser un números" //si lanza el throw, despues no ejecuta mas nada
       }
       return true; //si no hay error  
    })

    .argv //es lo último q se pone

    module.exports = argv;