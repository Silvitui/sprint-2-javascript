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

const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10] 
const array3 = [...array1,...array2]

console.log(array3)