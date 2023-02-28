class PalindromeChecker {
    public static isPalindrome(text: string): boolean {
      // Eliminamos los espacios vacios y convertimos el texto a minuscula
      const formattedText = text.split(' ').join('').toLowerCase();
      
      // Verificamos que la palabra al reves es igual al texto inicial
      let reversedText = '';
      for (let i = formattedText.length - 1; i >= 0; i--) {
        reversedText += formattedText[i];
      }
      return formattedText === reversedText;
    }
  }

export default PalindromeChecker