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
      expect(dePalabrasAFrase(["Hola", "como", "estas"])).toBe(
        "Hola como estas"
      );
      expect(dePalabrasAFrase(["Hello"])).toBe("Hello");
    });
  });
  
  describe("arrayContiene(arr, item)", function () {
    it("Debe retornar true si el array contiene el item", function () {
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
  