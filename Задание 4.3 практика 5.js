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

// Класс компьютера
class Computer extends ElectricalAppliance {
    constructor(name, power, brand, model, username, password) {
        super(name, power);
        this.brand = brand;
        this.model = model;
        this.username = username;
        this.password = password;
    }

    // Метод включатель
    start() {
        if (this.plugged) {
            console.log(`Компьютер "${this.name}" (${this.brand} ${this.model}) запущен.`);
        } else {
            console.log(`Сначала нужно включить компьютер "${this.name}" в розетку.`);
        }
    }

    // Метод выключатель
    shutdown() {
        console.log(`Компьютер выключен.`);
    }

    // Метод логирования
    login(username, password) {
        if (this.plugged === false) {
            console.log(`Сначала нужно включить компьютер "${this.name}" в розетку.`);
        } else if (this.logged) {
            console.log(`Компьютер уже в сеансе пользователя "${this.username}".`);
        } else {
            console.log(`Попытка входа в систему компьютера`);
            if (username === this.username && password === this.password) {
                this.logged = true;
                console.log(`Вход в систему компьютера под пользователем "${this.username}" выполнен успешно.`);
            } else {
                console.log(`Ошибка авторизации. Неверное имя пользователя или пароль.`);
            }
        }
    }

    // Метод завершения сеанса
    logout() {
        if (this.logged) {
            console.log(`Выход из системы компьютера.`);
            this.logged = false;
        } else {
            console.log(`Нет авторизованных пользователей.`);
        }
    }
}

const myComputer = new Computer("Мой компьютер", 500, "Apple", "MacBook Pro", "user", "1234");
const myLamp = new Lamp('Настольная лампа', 40, 1);

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