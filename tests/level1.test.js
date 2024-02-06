const {
  sonIguales,
  tienenMismaLongitud,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  esPositivo,
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
  it("Debería devolver el string `Este numero es positivo` ó `Este numero es negativo` según corresponda y false si es 0", function () {
    expect(esPositivo(0)).toBe(false);
    expect(esPositivo(23)).toBe("Este numero es positivo");
    expect(esPositivo(-2)).toBe("Este numero es negativo");
  });
});






