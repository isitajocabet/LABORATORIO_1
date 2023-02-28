import MaxFinder from "../src/Ejercicio2";

describe('MaxFinder', () => {
    describe('findMax', () => {
      it('retorna el numero mayor de un array', () => {
        const array = [2, 88, 65, 17, 95, 39];
        expect(MaxFinder.findMax(array)).toBe(95);
      });
  
      it('retorna el unico elemento cuando el array solo tiene un numero', () => {
        const array = [42];
        expect(MaxFinder.findMax(array)).toBe(42);
      });
  
      
    });
  });
  