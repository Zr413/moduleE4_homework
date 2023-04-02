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


myLamp.plugIn();
myLamp.brighten();
myLamp.dim();


myComputer.plugIn();
myComputer.start();
myComputer.login("user", "1234");
myComputer.logout();
myComputer.login("admin", "password");
myComputer.logout();
myComputer.shutdown();