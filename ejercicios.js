//* (Arrow functions) Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}. */

const add = (a, b) => {
  return a + b;
};
console.log("add: ", add(4, 5));
/**(Arrow Functions) Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100. */

const randomNumber = () => {
  const numRamdon = Math.ceil(Math.random() * 100);
  console.log("random number: ", numRamdon);
  return numRamdon;
};
randomNumber();
/**(Arrow functions) Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hola, ${this.name}`);
  }
}
const newPerson = new Person("Silvia");

newPerson.greet();

/**(Arrow Functions) Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa. */
const numbers = [1, 2, 3, 4, 5];
const printNumbers = (numbers) => {
  numbers.forEach((n) => {
    console.log("numbers printed:", n);
  });
};
printNumbers(numbers);

/**(Arrow functions) Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons */

const message = () => {
  setTimeout(() => {
    console.log("Holaaa!");
  }, 3000);
};

message();

/*********************OPERADOR TERNARIO ******************* */

/**Exercici 1:
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'. */

const legalAge = (age) => {
  const toDrive = age >= 18 ? "You can drive" : "You cannot drive";
  console.log("Legal age:", toDrive);
  return toDrive;
};
legalAge(28);

/**(Operador ternari):  Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. */

const whoIsBigger = (num1, num2) => {
  const numbers = num1 > num2 ? `${num1} is bigger` : `${num2} is bigger`;
  console.log("Biggest number: ", numbers);
  return numbers;
};

whoIsBigger(10, 9);

/**(Operador ternari): Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero. */

const determinateNumbers = (num1) => {
  const numbers =
    num1 > 0
      ? `${num1} is positive`
      : num1 < 0
      ? `${num1} is negative`
      : `${num1} is zero`;

  console.log("numbers:", numbers);
  return numbers;
};

determinateNumbers(0);

//*(Operador ternari) amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const findMaxim = (a, b, c) => {
  a === b && a === c
    ? console.log("The three numbers are the same")
    : a === b || a === c || b === c
    ? console.log("There are two identical numbers")
    : a > b && a > c
    ? console.log(`${a} is the biggest number`)
    : b > a && b > c
    ? console.log(`${b} is the biggest number`)
    : console.log(`${c} is the biggest number`);
};

findMaxim(9, 9, 9);

///*Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.**/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const esPar = (array) => {
  array.forEach((number) => {
    console.log(number % 2 === 0 ? `${number} es par` : `${number} es impar`);
  });
};

esPar(array);

/********************CALLBACKS********************* */

/**Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre. */

const processar = (numero, callback) => {
  callback(numero);
};

const alCuadrado = (numero) => {
  console.log(`El cuadrado del ${numero} es ${numero * numero}`);
};

processar(2, alCuadrado);

/**Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

const calcular = (num1, num2, callback) => {
  callback(num1, num2);
};

const suma = (num1, num2) => {
  console.log(`La suma de ${num1} + ${num2} es ${num1 + num2}`);
};
calcular(5, 5, suma);

/**Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre. */

const esperarISaludar = (nombre, callback) => {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
};

const saludar = (nombre) => {
  console.log(`Hola! ${nombre}`);
};

esperarISaludar("Silvia", saludar);

/**Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

const arrayMotivador = ["tu", "si", "que", "vales"];

const processarElements = (arrayMotivador, callback) => {
  arrayMotivador.forEach((palabra) => {
    callback(palabra);
  });
};

const mostrarPalabra = (palabra) => {
  console.log(palabra);
};

processarElements(arrayMotivador, mostrarPalabra);

/**Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada. */

let palabra = "elocuencia";

const processarCadena = (palabra, callback) => {
  let palabraConvertida = palabra.toUpperCase();
  callback(palabraConvertida);
};

const ensenyarPalabra = (palabraConvertida) => {
  console.log("palabra convertida a mayúsculas:", palabraConvertida);
};

processarCadena(palabra, ensenyarPalabra);

/***********************REST & SPREAD OPERATOR ***************************************** */
/**Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];

console.log("La unión de dos arrays (con spread):",array3);

/**Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma. */
const sumas = (...numeros) => {
  let total = 0;
  numeros.forEach((n) => {
    total = total + n;
  });
  console.log("Suma total (operador rest):",total);
  return total;
};

sumas(5, 5, 5, 5, 5, 5, 5, 5);

/**Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat. */

const objeto1 = {
  nombre : "Silvia",
  edad : 28,
  ciudad : "Barcelona"
}

const objeto2 = {...objeto1}

objeto2.edad = 29;

console.log("objeto1:", objeto1)
console.log("objeto2",objeto2)

/**Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable. */

const elementos = ["orquideas","petunias","girasoles","nenúfares"]

const [primera,segunda,...rest] = elementos

console.log("Destructuring:",rest)

/**Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array. */


const tresArgumentos = (dulce1,dulce2,dulce3) => {
  return `Los dulces son ${dulce1}, ${dulce2},${dulce3}`

}
const dulces = ["Chocolate","caramelos","galletas"]

const resultado = tresArgumentos(...dulces)

console.log("Operador spread:",resultado)

/**Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou. */

const objecte1 = {
  nom : "Silvia",
  edad : 28,
}

const objecte2 = {
  ciudad : "Barcelona",
  

}

const resultat = {...objecte1,...objecte2}

console.log("Dos objetos fusionados",resultat)


/*******************MAP******************* */

/**Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

const arrayNumeros = [1,2,3,4] 

const nuevoArray = arrayNumeros.map(numero => numero ** 2)

console.log("Nuevo array con números al cuadrado:",nuevoArray)

/**Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells. */

const arrayDeNumeros = [1,2,3,4]

const nuevoArrayDeNumeros = arrayDeNumeros.filter(numero => numero %2 === 0 ) 

console.log("Nuevo array de números pares:",nuevoArrayDeNumeros)

/**Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10. */

const arrayNumbers = [1,10,8,11] 

const findLargeNumber = arrayNumbers.find(numero => numero > 10)
console.log("Encontrar número mayor a 10:",findLargeNumber)

//**Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números. */

const arrNumber = [13,7,8,21]

const sumaTotal = arrNumber.reduce((acumulador, valor) => acumulador + valor,0) 

console.log("Suma total de números con reduce:",sumaTotal)

/**Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.

- Multiplica cada nombre filtrat per 2.

- Calcula la suma dels nombres filtrats i multiplicats per 2.

- La funció ha de retornar el resultat de la suma. */

const numsArray = [1,3,7,10,15,17,11,5,8,12,9]

const filtrarNums = numsArray.filter(num => num >= 10).map(num => num * 2).reduce((acumulador,valor) => acumulador + valor,0)
console.log(filtrarNums)

/**Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament */

const matriz = [11,12,13,14]

const algunosMayoresQueDiez = matriz.some(numero => numero > 10)
console.log("Algunos números mayores que 10",algunosMayoresQueDiez)

const todosMayoresQueDiez = matriz.every(numero => numero > 10)
console.log("Todos mayores que 10 :", todosMayoresQueDiez)

/********************ARRAY LOOPS********************************** */
/**forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; **/

const arrayNombres = ["Anna","Bernat","Clara"]

let nombres = arrayNombres.forEach((nombres) => console.log(nombres))

/**for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

const nombresArrays = ["Anna","Bernat","Clara"]

for (let nombres of nombresArrays) {
  console.log("Nombres con for-of",nombres)
}

/**filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6]; */

const matrizNumeros = [1,2,3,4,5,6]

const nuevaMatriz = matrizNumeros.filter(numeros => numeros %2 === 0) 
console.log(nuevaMatriz)

/**for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent. */

const objetos = {
  nombre : "Ona",
  edad : 25,
  ciudad: "Barcelona"
}

for (let llave in objetos) {
  console.log(`${llave} : ${objetos[llave]}`)
}

/**for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6]; */

const numeros = [1,2,3,4,5,6]

for (let numero of numeros) {
  if (numero === 5) {
    break;
  }

  console.log(numero)
}

/**for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara'] */ 

const nombresConIndex = ["Anna","Bernat","Clara"]

for (let [index,nombres] of nombresConIndex.entries()) {
  console.log(`Index: ${index}, Nombre : ${nombres}`)
}

/***********************PROMESAS********************************/
/**Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */


const promesa = new Promise ((resolve) => {
  setTimeout(() => {
    resolve("Hola mundo")
    console.log("Hola mundo")
  },2000)
}
)

/**Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */

const mipromesa = new Promise ((resolve) => {
  setTimeout(() => {
    resolve("Hola mundo")
  },2000)
})
mipromesa.then((resultado) => {
  console.log(resultado)
})

/**Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

const promesaReject = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'Hola') {
        resolve("La promesa se ha resuelto");
      } else {
        reject("Error, la promesa no es 'Hola'");
      }
    }, 2000);
  });
}

promesaReject("Hola")
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));

promesaReject("Adiós")
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));

  /**Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */
 
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mundo");
  }, 2000);
});

const imprimirResultado = async () => {
  const resultado = await promise;
  console.log(resultado);
}

imprimirResultado();

  /*Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.* */
 
  const promesaConRetardo = (frase) => {
    return new Promise((resolve, reject) => {
      if (frase !== "Hola mundo") {
        reject("La frase no es correcta");
      } else {
        setTimeout(() => {
          resolve("Hola mundo");
        }, 3000);
      }
    });
  };
  
  const ejecutarFuncion = async () => {
    try {
      let resultado = await promesaConRetardo("Adiós mundo");
      console.log("Resultado:", resultado);
    } catch (error) {
      console.error("Se produjo un error:", error);

    }
  };
  
  ejecutarFuncion();

  /**Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola. */

  const asyncTarea1 = (input) => {
    if (input !== "Iniciando tarea 1") {
        return Promise.reject("Error en tarea 1");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 1 completada");
        }, 2000);
    });
};

const asyncTarea2 = (input) => {
    if (input !== "Iniciando tarea 2") {
        return Promise.reject("Error en tarea 2");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 2 completada");
        }, 3000
      );
    });
};


Promise.all([
    asyncTarea1("Iniciando tarea 1"),
    asyncTarea2("Iniciando tarea 2")
])
.then((resultados) => {
    console.log("Todas las tareas completadas");
    resultados.forEach((resultado) => {
        console.log(resultado);
    });
})
.catch((error) => {
    console.error("Error en la ejecución de tareas:", error);
});