// Родительская функция для электроприборов
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
}

// Методы для включения/выключения прибора из розетки
ElectricalAppliance.prototype.plugIn = function() {
    if (!this.plugged) {
        this.plugged = true;
        console.log(`${this.name} включен(а) в розетку.`);
    }
};

ElectricalAppliance.prototype.plugOut = function() {
    if (this.plugged) {
        this.plugged = false;
        console.log(`${this.name} выключен(а) из розетки.`);
    }
};

// Дочерний объект - настольная лампа
function Lamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

// Устанавливаем связь прототипа настольной лампы с родительским объектом
Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;

// Методы для работы с яркостью настольной лампы
Lamp.prototype.dim = function() {
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
};

Lamp.prototype.brighten = function() {
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
};

Lamp.prototype.turnOn = function() {
    if (this.plugged) {
        this.isOn = true;
        console.log(`Лампа "${this.name}" (${this.power} Вт) включена.`);
    } else {
        console.log(`Сначала нужно включить лампу "${this.name}" в розетку.`);
    }
}

// Дочерний объект - компьютер
function Computer(name, power, brand, model) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
    this.model = model;
    this.username = 'admin';
    this.password = '1234';
}

// Устанавливаем связь прототипа компьютера с родительским объектом
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Методы для работы с компьютером
Computer.prototype.start = function() {
    if (this.plugged) {
        console.log(`Компьютер "${this.name}" (${this.brand} ${this.model}) запущен.`);
    } else {
        console.log(`Сначала нужно включить компьютер "${this.name}" в розетку.`);
};

Computer.prototype.shutdown = function () {
        console.log(`Компьютер "${this.name}" (${this.brand} ${this.model}) выключен.`);
};

Computer.prototype.login = function (username, password) {
    if (this.logged) {
        console.log(`Компьютер "${this.name}" уже в сеансе пользователя "${this.username}".`);
    } else {
        console.log(`Попытка входа в систему компьютера "${this.name}"...`);
        if (username === this.username && password === this.password) {
            this.logged = true;
            console.log(`Вход в систему компьютера "${this.name}" под пользователем "${this.username}" выполнен успешно.`);
        } else {
            console.log(`Не удалось войти в систему компьютера "${this.name}". Проверьте правильность логина и пароля.`);
        }
    }
};

Computer.prototype.logout = function () {
    if (this.logged) {
        console.log(`Выход из системы компьютера "${this.name}" для пользователя "${this.username}".`);
        this.logged = false;
    } else {
        console.log(`Компьютер "${this.name}" не был в сеансе пользователя.`);
    }
};
}

// Создание экземпляров
const lamp = new Lamp('Настольная лампа', 40);
const computer = new Computer('Мой компьютер', 'Dell', 'Inspiron 5000', 'admin', '1234');

// Включение приборов
lamp.plugIn();
computer.plugIn();

// Использование методов
lamp.turnOn();
lamp.dim();
lamp.brighten();
computer.start();
computer.login('admin', '1234');
computer.logout();
computer.shutdown();

lamp.plugOut();
computer.plugOut();