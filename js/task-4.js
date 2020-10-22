class StringBuilder {
    constructor(string) {
        this._value = string
    }

    get value() {
        return this._value
    }

    append(str) {
        return this._value += str
    }

    prepend(str) {
        return this._value = str + this._value
    }

    pad(str) {
        return str + this.prepend(str) + this._value + this.append(str) + str
    }
}
  

// console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');
// console.log(builder.value)
// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

