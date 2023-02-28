class StringToArray {
    private str: string;
  
    constructor(str: string) {
      this.str = str;
    }
  
    toArray(): string[] {
      return this.str.split('');
    }
  }
export default StringToArray