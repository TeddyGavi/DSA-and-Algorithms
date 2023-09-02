class hashTable {
  keyMap: string[] | number[];

  constructor(arraySize = 53) {
    this.keyMap = new Array(arraySize);
  }

  _hash(key: string | number) {
    let total = 0;
    const weird = 31;

    for (let i = 0; i < Math.min(this.keyMap.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * weird + value) & this.keyMap.length;
    }

    return total;
  }
}

const hashMap = new hashTable()
console.log(hashMap)