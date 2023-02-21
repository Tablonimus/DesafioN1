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


  ///---level2
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