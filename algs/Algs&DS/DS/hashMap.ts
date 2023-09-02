class hashTable {
  keyMap: number[];

  constructor(arraySize = 53) {
    this.keyMap = new Array(arraySize);
  }

  private _hash(key: string ) {
    let total = 0;
    const weird = 31;
    for (let i = 0; i < Math.min(this.keyMap.length, 100); i++) {
      const char = key[i];
      console.log(char)
      const value = char.charCodeAt(0) - 96;
      total = (total * weird + value) & this.keyMap.length;
    }

    return total;
  }

  public set(key: string , value: string) {

    const hash = this._hash(key)
    console.log(hash, value, "hi")

  }


}

const hashMap = new hashTable()
console.log(hashMap)
console.log(hashMap.set("hi", "pink"))