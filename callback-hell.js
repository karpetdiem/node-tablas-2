const empleados = [
    { id: 1,
      nombre: "Fernando"
    },
    { id: 2,
      nombre: "Camotinia"
    },
    { id: 3,
      nombre: "Karen"
    }
];

const salarios = [
    { id: 1,
      salario: 2000
    },
    { id: 2,
      salario: 2500
    }
];

const getEmpleado = (id, cb) => {
    const empleado = empleados.find(e => e.id === id)?.nombre; //? evalua si se cumplea la cond, y si se cumple desestructura a empleado.nombre
    if (empleado) {
        cb(null, empleado);
    } else {
        cb( `El empleado ${id} no existe`);
    }
} 

const getSalario = (id, cb) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        cb(null, salario);
    } else {
        cb( `No existe salario para empleado con id ${id}`);
    }
} 

const id = 3;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log("Error: ", err);
    } 
    
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log("Error: ", err);
        }
        console.log("El empleado ", empleado, "tiene un salario es de: ", salario, " u$s");       
    });       
});


