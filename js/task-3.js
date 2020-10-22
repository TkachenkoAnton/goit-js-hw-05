class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(newItem) {
        this.items.push(newItem)
    }
   
  removeItem(itemRem) {
    //Вариант 1 
    this.items = this.items.filter(item => item !== itemRem);

    //Вариант 2
    //   const remItemIndex = this.items.indexOf(itemRem);
    //   return this.items.splice(remItemIndex, 1);
    }
}


// console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
