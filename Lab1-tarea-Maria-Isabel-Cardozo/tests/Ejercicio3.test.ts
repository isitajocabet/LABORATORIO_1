import StringToArray from "../src/Ejercicio3";

describe('StringToArray', () => {    
    it('retorna un array de letras cuando se envia un string', () => {
      const text = 'Hello';
      const stringToArray = new StringToArray(text);
      const result = stringToArray.toArray();
      expect(result).toEqual(['H', 'e', 'l', 'l', 'o']);
    });
  });
  