export class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
    this.#currentFuelVolume = 0;
    this.#mileage = 0;
    this.#isStarted = false;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (this.#isStarted) {
      this.#isStarted = false;
    } else {
      throw new Error('Машина ещё не заведена');
    }
  }

  fillUpGasTank(value) {
    if (Number.isFinite(value) && value > 0) {
      if (this.#currentFuelVolume + value <= this.#maxFuelVolume) {
        this.#currentFuelVolume += value;
      } else {
        throw new Error('Топливный бак переполнен');
      }
    } else {
      throw new Error('Неверное количество топлива для заправки');
    }
  }

  drive(speed, hours) {
    if (Number.isFinite(speed) && speed > 0) {
      if (Number.isFinite(hours) && hours > 0) {
        if (speed <= this.#maxSpeed) {
          if (this.#isStarted) {
            const distance = speed * hours;
            const fuelNeeded = (distance / 100) * this.#fuelConsumption;
            if (fuelNeeded <= this.#currentFuelVolume) {
              this.#currentFuelVolume -= fuelNeeded;
              this.#mileage += distance;
            } else {
              throw new Error('Недостаточно топлива');
            }
          } else {
            throw new Error('Машина должна быть заведена, чтобы ехать');
          }
        } else {
          throw new Error('Машина не может ехать так быстро');
        }
      } else {
        throw new Error('Неверное количество часов');
      }
    } else {
      throw new Error('Неверная скорость');
    }
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    if (typeof brand === 'string' && brand.length >= 1 && brand.length <= 50) {
      this.#brand = brand;
    } else {
      throw new Error('Некорректное значение бренда');
    }
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if (typeof model === 'string' && model.length >= 1 && model.length <= 50) {
      this.#model = model;
    } else {
      throw new Error('Некорректное значение модели');
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    if (
      Number.isInteger(year) &&
      year >= 1900 &&
      year <= new Date().getFullYear()
    ) {
      this.#yearOfManufacturing = year;
    } else {
      throw new Error('Некорректное значение года выпуска');
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(speed) {
    if (Number.isInteger(speed) && speed >= 100 && speed <= 300) {
      this.#maxSpeed = speed;
    } else {
      throw new Error('Некорректное значение максимальной скорости');
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(maxFuelVolume) {
    if (
      Number.isInteger(maxFuelVolume) &&
      maxFuelVolume >= 5 &&
      maxFuelVolume <= 20
    ) {
      this.#maxFuelVolume = maxFuelVolume;
    } else {
      throw new Error('Некорректное значение объема топливного бака');
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(fuelConsumption) {
    if (Number.isFinite(fuelConsumption) && fuelConsumption > 0) {
      this.#fuelConsumption = fuelConsumption;
    } else {
      throw new Error(
        'Некорректное значение максимального потребления топлива'
      );
    }
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }
}
