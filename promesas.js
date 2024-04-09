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

const getEmpleado = (id) => {
    return new Promise((res, rej) => {
    const empleado = empleados.find(e => e.id === id)?.nombre; //? evalua si se cumplea la cond, y si se cumple extrae el nombre haciendo empleado.nombre
    (empleado)
        ? res(empleado)
        : rej( `El empleado ${id} no existe`);
    }) ;
}

const getSalario = (id) => {
  return new Promise((res, rej) => {
  const salario = salarios.find(s => s.id === id)?.salario; //? evalua si se cumplea la cond, y si se cumple extrae el salario haciendo salarios.salario
  (salario)
      ? res(salario)
      : rej( `No existe salario para empleado con id ${id}`);
  }) ;
}   

const id = 4;

//* CODIGO REPETITIVO PERO FUNCIONA:
// getEmpleado(id)
//     .then( empleado => console.log(empleado) )
//     .catch( err => console.log(err) )
// getSalario(id)
//   .then( salario => console.log(`Salario de empleado ${id}: ${salario}`) )
//   .catch( err => console.log(err) )

// !EVITAR ESTOS PROMISE HELL:
// getEmpleado(id)
//     .then( empleado => {
//       getSalario(id)
//         .then( salario => console.log(`El empleado "${empleado}" (id ${id}), tiene un salario de: ${salario} u$s`) )
//         .catch( err => console.log(err) )
//     }) 
//     .catch( err => console.log(err) );   

// !USAR PROMESAS ENCADENADAS:
let nombre;
getEmpleado(id)
    .then( empleado => {
       nombre = empleado;
       return getSalario(id)//este cb retorna una promesa
    }) // no necesito el then aqui y puedo concatenar otro .then con el return
    .then( salario => console.log(`El empleado "${nombre}" (id ${id}), tiene un salario de: ${salario} u$s`) )
    .catch( err => console.log(err) );
