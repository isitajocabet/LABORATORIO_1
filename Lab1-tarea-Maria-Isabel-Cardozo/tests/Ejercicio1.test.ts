import PalindromeChecker from "../src/Ejercicio1";

describe('Laboratorio1', () => {
    describe('Ejercicio1-esPalindrome', () => {
      it('retorna true si la palabra es palindrome', () => {
        
        expect(PalindromeChecker.isPalindrome('oruro')).toBe(true);
      });
  
      it('retorna false si la palabra no es palindrome', () => {
        
        expect(PalindromeChecker.isPalindrome('maria')).toBe(false);
      });
    });

   });
  