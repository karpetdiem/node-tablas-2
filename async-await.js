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

const getInfoUsuario = async (id) => {
    try { 
      const empleado = await getEmpleado(id);
      const salario = await getSalario(id);
      return `El salario del empleado ${empleado} es de ${salario} u$s`;
    } catch (error) {
      //* return error; el error seria la promesa q no se logre completar, y return seria como si manejara la excepcin saliendo correctamente
      throw error; //* Para q lance un error (reject de la fn asinc)
    }
}

const id = 4;

getInfoUsuario(id)
    .then(msg => console.log(`Todo bien ${msg}`))
    .catch(err => console.log(`Todo mal ${err}`));