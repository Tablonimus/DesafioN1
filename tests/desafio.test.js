const {
  sonIguales,
  tienenMismaLongitud,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  esPositivo,
  combinarNombres,
  obtenerSaludo,
  agregarSimboloExclamacion,
  deEuroAdolar,
  esVocal,
  esDiezOCinco,
  estaEnRango,
  operadoresLogicos,
  tablaDelSeis,
  tieneTresDigitos,
  obtenerLargoDelArray,
  incrementarPorUno,
  devolverPrimerElemento,
  devolverUltimoElemento,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  cuentoElementos,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  elementosMayores,
  mayorACien,
} = require("../desafio.js");

describe("sonIguales(elemento1, elemento2)", function () {
  it("Deberia devolver true si los argumentos son estrictamente iguales y sino false", function () {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales(90, "90")).toBe(false);
    expect(sonIguales("test", "test")).toBe(true);
  });
});

describe("tienenMismaLongitud(str1, str2)", function () {
  it("Deberia devolver true si los strings tienen la misma longitud y sino false", function () {
    expect(tienenMismaLongitud("hi", "there")).toBe(false);
    expect(tienenMismaLongitud("javascript", "bumfuzzled")).toBe(true);
  });
});

describe("esPar(num)", function () {
  it("Deberia devolver true si el numero es par sino false", function () {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

describe("esImpar(num)", function () {
  it("Deberia devolver true si el numero es impar sino false", function () {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});
describe("elevarAlCuadrado(num)", function () {
  it("Deberia devolver el numero elevado al cuadrado", function () {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

describe("elevarAlCubo(num)", function () {
  it("Deberia devolver el numero elevado al cubo", function () {
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

describe("elevar(num, exponent)", function () {
  it("Deberia devolver el numero elevado al exponente indicado", function () {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

describe("esPositivo(numero)", function () {
  it("Debería devolver el string Este numero es positivo ó Este numero negativo según corresponda y falso si es 0", function () {
    expect(esPositivo(0)).toBe(false);
    expect(esPositivo(23)).toBe("Este numero es positivo");
    expect(esPositivo(-2)).toBe("Este numero es negativo");
  });
});

describe("combinarNombres(firstName, lastName)", function () {
  it("Deberia devolver los strings combinados con un espacio en el medio", function () {
    expect(combinarNombres("hello", "world!")).toBe("hello world!");
    expect(combinarNombres("Lionel", "Messi")).toBe("Lionel Messi");
  });
});

describe("obtenerSaludo(name)", function () {
  it("Deberia devolver el string 'Hola {name}!'", function () {
    expect(obtenerSaludo("Martin")).toBe("Hola Martin!");
    expect(obtenerSaludo("Antonio")).toBe("Hola Antonio!");
  });
});

describe("agregarSimboloExclamacion(str)", function () {
  it("Deberia agregar un signo de exclamacion al final del string", function () {
    expect(agregarSimboloExclamacion("hello world")).toBe("hello world!");
    expect(agregarSimboloExclamacion("Aguante DEV.F")).toBe("Aguante DEV.F!");
  });
});

describe("deEuroAdolar(euro)", function () {
  it("Deberia retornar el valor correcto de euro a dolar", function () {
    expect(deEuroAdolar(100)).toBe(120);
    expect(deEuroAdolar(200)).toBe(240);
    expect(deEuroAdolar(50)).toBe(60);
  });
});

describe("esVocal(letra)", function () {
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function () {
    expect(esVocal("la")).toBe("Dato incorrecto");
    expect(esVocal("pero")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function () {
    expect(esVocal("l")).toBe("Dato incorrecto");
    expect(esVocal("p")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Es vocal", si el valor ingresado lo es', function () {
    expect(esVocal("a")).toBe("Es vocal");
    expect(esVocal("e")).toBe("Es vocal");
    expect(esVocal("i")).toBe("Es vocal");
    expect(esVocal("o")).toBe("Es vocal");
    expect(esVocal("u")).toBe("Es vocal");
  });
});

describe("esDiezOCinco(num)", function () {
  it("debe retornar true si es 10 o 5 el numero", function () {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it("debe retornar false si NO es 10 o 5", function () {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

describe("estaEnRango(num)", function () {
  it("deberias retornar true si el numero esta en el rango solicitado", function () {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it("deberias retornar false si el numero NO esta en el rango solicitado", function () {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

describe("operadoresLogicos(num1, num2, num3)", function () {
  it("Deberia retornar 'Número 1 es mayor y positivo' si num1 es positivo y mayor que num2 y num3", function () {
    expect(operadoresLogicos(50, 2, 15)).toBe("Número 1 es mayor y positivo");
  });
  it("Deberia retornar 'Hay negativos' si alguno de los numeros del argumento es negativo", function () {
    expect(operadoresLogicos(80, -1, 2)).toBe("Hay negativos");
  });
  it("Deberia retornar num3 + 1 si num3 es mayor que num1 y num2", function () {
    expect(operadoresLogicos(1, 3, 10)).toBe(11);
  });
  it("Deberia retornar 'Error' si algun argumento es igual a 0", function () {
    expect(operadoresLogicos(1, 0, 10)).toBe("Error");
  });
  it("Deberia retornar false si no cumple ninguna condicion", function () {
    expect(operadoresLogicos(10, 30, 6)).toBe(false);
  });
});

describe("tablaDelSeis()", function () {
  it("should return multiplication table of 6", function () {
    expect(tablaDelSeis()).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
  });
});

describe("tieneTresDigitos(numero)", function () {
  it("deberia retornar verdader si tiene 3 digitos", function () {
    expect(tieneTresDigitos(100)).toBe(true);
    expect(tieneTresDigitos(820)).toBe(true);
    expect(tieneTresDigitos(900)).toBe(true);
    expect(tieneTresDigitos(10)).toBe(false);
    expect(tieneTresDigitos(20000)).toBe(false);
  });
});

describe("obtenerLargoDelArray(arr)", function () {
  it("debe retornar el largo del array", function () {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(
      obtenerLargoDelArray(["hi", "there", "how", "are", "you", "doing?"])
    ).toBe(6);
  });
});

describe("incrementarPorUno(arr)", function () {
  it("debes devolver cada valor del array incrementado en 1", function () {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([
      98, 101, 81, 56, 73, 95,
    ]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe("devolverPrimerElemento(arr)", function () {
  it("deberías devolver el primer elemento del array", function () {
    expect(devolverPrimerElemento([62626, 164560, 1786, 1782])).toBe(62626);
    expect(devolverPrimerElemento([55, 452, 964564])).toBe(55);
  });
});

describe("devolverUltimoElemento(arr)", function () {
  it("debe retornar el último elemento del array", function () {
    expect(devolverUltimoElemento([13, 54, 46, 12])).toBe(13);
    expect(devolverUltimoElemento([89, 55, 85, 13, 25, 56])).toBe(56);
    expect(devolverUltimoElemento(["How", "are", "you?"])).toBe("you?");
  });
});

describe("dePalabrasAFrase(words)", function () {
  it("should return a string that has all of the words from the array separated by spaces", function () {
    expect(dePalabrasAFrase(["Henry", "JavaScript", "Class"])).toBe(
      "Henry JavaScript Class"
    );
    expect(dePalabrasAFrase(["Henry"])).toBe("Henry");
  });
});

describe("arrayContiene(arr, item)", function () {
  it("should return true if the array contains the item", function () {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], "Hola")).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('agregarNumeros(numbers)', function() {
  it('Debes sumar todos los valores del array y devolver la suma de ellos', function() {
    expect(agregarNumeros([10, 10, 16])).toBe(36);
    expect(agregarNumeros([97, 100])).toBe(197);
    expect(agregarNumeros([0])).toBe(0);
  });
});

describe('cuentoElementos(arreglo)', function() {
  it('should return a counter with the total of numbers greater than 18', function() {
    expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
    expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe('empiezaConNueve(n))', function() {
  it('debes retornar true si empieza con 9 y false en caso contrario', function() {
    expect(empiezaConNueve(98)).toBe(true);
    expect(empiezaConNueve(9)).toBe(true);
    expect(empiezaConNueve(2)).toBe(false);
    expect(empiezaConNueve(7)).toBe(false);
    expect(empiezaConNueve(-5)).toBe(false);
  });
});

describe('todosIguales(arreglo)', function() {
  it('debes retornar true si todos los elementos del array son iguales,caso contraro, false', function() {
    expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
    expect(todosIguales([97, 100, 190, 9])).toBe(false);
   
    expect(todosIguales([230, 230, 230, 230 ])).toBe(true);
  });
});

describe('mesesDelAño(array)', function() {
  it('Debes retornar una nueva variable con los meses pedidos', function() {
    var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
    var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
    expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
    expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  });
});




describe("elementosMayores(array)", function () {
  it("Debes retornar un contador con el total de números mayores a 18 que incluye el array", function () {
    expect(elementosMayores([10, 10, 18, 21])).toBe(1);
    expect(elementosMayores([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(elementosMayores([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe("mayorACien(array)", function () {
  it("debes retornar un array con los numeros que sean mayores a 100", function () {
    var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
    expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
  });
});
