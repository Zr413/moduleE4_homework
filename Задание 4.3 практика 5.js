// Родительская класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.plugged = false;
    }

    // Метод включающий в розетку
    plugIn() {
        if (!this.plugged) {
            this.plugged = true;
            console.log(`${this.name} включен(а) в розетку.`);
        }
    }

    // Метод выключающий из розетки
    plugOut() {
        if (this.plugged) {
            this.plugged = false;
            console.log(`${this.name} выключен(а) из розетки.`);
        }
    }
}

//Класс лампы
class Lamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    // Метод уменьшения яркости
    dim() {
        if (this.plugged) {
            if (this.brightness > 0) {
                this.brightness -= 1;
                console.log(`Яркость лампы "${this.name}" уменьшена на 1. Текущая яркость: ${this.brightness}`);
            } else {
                console.log(`Яркость лампы "${this.name}" уже на минимуме.`);
            }
        } else {
            console.log(`Сначала нужно включить лампу "${this.name}" в розетку.`);
        }
    }

    // Метод увеличения яркости
    brighten() {
        if (this.plugged) {
            if (this.brightness < 10) {
                this.brightness += 1;
                console.log(`Яркость лампы "${this.name}" увеличена на 1. Текущая яркость: ${this.brightness}`);
            } else {
                console.log(`Яркость лампы "${this.name}" уже на максимуме.`);
            }
        } else {
            console.log(`Сначала нужно включить лампу "${this.name}" в розетку.`);
        }
    }

    // Метод выключатель
    turnOn() {
        if (this.plugged) {
            this.isOn = true;
            console.log(`Лампа "${this.name}" (${this.power} Вт) включена.`);
        } else {
            console.log(`Сначала нужно включить лампу "${this.name}" в розетку.`);
        }
    }
}


const myLamp = new Lamp('Настольная лампа', 40, 1);

myLamp.plugIn();
myLamp.brighten();
myLamp.dim();


// myComputer.plugIn();
// myComputer.start();
// myComputer.login("user", "1234");
// myComputer.logout();
// myComputer.login("admin", "password");
// myComputer.logout();
// myComputer.shutdown();