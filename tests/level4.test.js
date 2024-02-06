const { deObjetoAmatriz,numberOfCharacters,buscoInterseccion } = require("../desafio.js");

describe("deObjetoAmatriz(objeto)", function () {
  it("should return an array, where each element represents a key-value pair in the form of an array.", function () {
    expect(deObjetoAmatriz({ x: 1, y: 2 })).toEqual([
      ["x", 1],
      ["y", 2],
    ]);
    expect(deObjetoAmatriz({ x: 10, y: 25 })).toEqual([
      ["x", 10],
      ["y", 25],
    ]);
  });
});

describe("numberOfCharacters(string)", function () {
  it("should return an object with the characters and the number of times they appear as a key-value pair", function () {
    expect(numberOfCharacters("sktpwrroqstkrpwwsqtqopwktsd")).toEqual({
      s: 4,
      k: 3,
      t: 4,
      p: 3,
      w: 4,
      r: 3,
      o: 2,
      q: 3,
      d: 1,
    });
    expect(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")).toEqual({
      a: 5,
      b: 2,
      c: 2,
      d: 4,
      f: 4,
      h: 1,
      j: 4,
      s: 5,
    });
  });
});

describe("buscoInterseccion(arreglo1, arreglo2)", function () {
  it("should return the common elements of the array, and in case they do not match, return an empty array", function () {
    expect(buscoInterseccion([1, 2, 3], [1, 5, 8, 3])).toEqual([1, 3]);
    expect(buscoInterseccion([7, 23, 4], [23, 70])).toEqual([23]);
    expect(buscoInterseccion([1, 20, 3], [22, 5, 7])).toEqual([]);
  });
});
