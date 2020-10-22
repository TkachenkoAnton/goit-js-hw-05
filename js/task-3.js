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
            for (let i = 0; i < this.items.length; i += 1) {
                const remItemIndex = this.items.indexOf(itemRem)
                const arrItem = this.items[i]
                
            if (arrItem === itemRem) {
                this.items.splice(remItemIndex, 1);
            }
        }
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

storage.removeItem('Нанитоиды');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
