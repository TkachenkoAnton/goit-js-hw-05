class Car {
    static getSpecs(model) {
        return `maxSpeed: ${model.maxSpeed}, speed: ${model.speed}, isOn: ${model.isOn}, distance: ${model.distance}, price: ${model.price}`;
      }
    constructor({maxSpeed, price}) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this._price = price;
        this.isOn = false;
        this.distance = 0;
  }
    get price() {
        return this._price;
  }
    set price(value) {
      this._price = value
  }
    turnOn() {
      this.isOn = true;
  }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
  }
    accelerate(value) {
      if (value < this.maxSpeed) {
          this.speed += value;
      } else {
          this.speed = this.maxSpeed
      }
  }
    decelerate(value) {
      if (value < this.speed) {
          this.speed -= value;
      } else {
          this.speed = 0;
      }
  }
    drive(hours) {
        if (this.isOn = true) {
          this.distance += (hours * this.speed)
      }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000


