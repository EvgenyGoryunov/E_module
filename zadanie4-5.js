// Задание 5.

// (((
// Начало задания из задания предыдущего юнита (Задание 4.)

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность.

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.)

/*
 *  План:
 *
 *    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
 *    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
 *    У каждого из приборов должны быть собственные свойства и, желательно, методы, 
 *    отличные от родительских методов.
 *    Создайте экземпляры каждого прибора.
 *    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
 *
 */
// )))

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



// ***************************************  МОЕ РЕШЕНИЕ *******************************************


// массив (список) в который будем помещать созданные нами устройства (для подсчета мощности
// и если прибор включен)
const devices = []


// фукнция подсчета общей мощности работающих эл.приборов
// метод parseInt - преобразует строковый тип (если вдруг мощность строкой напишем)
// power += число - аналогично power = power + число
function getAllPowerOn() {
    let power = 0
    for (let device of devices) {
        // условие, что прибор ключен в данный момент
        if (device.state == 'on'){
            power += parseInt(device.deviceWattage())
        }        
    }
    console.log('Суммарная мощность работающих эл.приборов: ' + power + 'Вт')
    return power
}


// создаем общий для всех классов класс с примерно общими свойствами
// name - название устройства, wattage - мощность его эл.потребления,
// category - категория (где в доме находится, кухня, комната, гараж), 
// type - тип (электрический, бензоинструмент), state - состояния прибора в данный момент
// (on - работает и потребляет энергию,  off - не работает), 
// метод  turn.OnOff - метод включения или отключения прибора (меняет state)
// || - две вертикальные черты означают значение по умолчанию, если при создании объекта 
// данному параметру не были присвоены значения, присвоются эти значения

// конструктор объектов, класс Устройство (Devise)
class Device {
    constructor(name, wattage, category, type, state) {
        this.name = name || 'withouth name'
        this.wattage = wattage || 0
        this.category = category || 'home'
        this.type = type || 'electric'
        this.state = state || 'off'
        // метод push - добавляет в конец списка данный объект, т.е. при создании
        // нового объекта класса (прибора) будем автоматически добавлять его в список приборов
        // и в дальнейшем, при итерации списка (по мощности и включению) будем получать мощность
        devices.push(this)
    }

    // метод включения и отключения устройств
    // при его вызове переменной state присваивается значение on (работает), либо off -
    // (не работает), выводится в консоль сообщение о состоянии и пересчитывается потребляемая 
    // в данный момент мощность эл.приборов
    energeOnOff() {
        if (this.state === 'off') {
            this.state = 'on'
            console.log(`Прибор ${this.name} ${this.state}(включен)`)
        }
        else if (this.state = 'on') {
            this.state = 'off'
            console.log(`Прибор ${this.name} ${this.state}(выключен)`)
        }
        getAllPowerOn()
    }

    // метод получения информации
    aboutDevice() {        
            return `Это устройство ${this.name}, находится в помещении ${this.category}, относится к типу ${this.type}.`        
    }

    deviceWattage() {
        if (this.state == 'on') return this.wattage 
        return 0
    }
}


// создадим новый дочерний класс GarageDevice от класса Device, унаследовав от него часть
// свойст (от родительского класса) и добавив новый параметр - вес устройства (weight)
class GarageDevice extends Device {
    constructor(name, wattage, category, type, weight, state) {
        super(
            name,
            wattage,
            type,
            state
        )
        this.category = category || 'garage'
        this.weight = weight || 0

    }

    // новый, переопределенный от родительского метода
    // метод получения информации об устройстве (отличие от родительсткого наличием weight)
    aboutDevice = function() {
        {return `Это прибор: ${this.name}, находится в помещении ${this.category}, относится к типу ${this.type}, мощностью ${this.wattage} и весом ${this.weight}кг`}
    }

}


let microwave = new Device('microwave', 2200, 'kitchen');
let meatGrinder = new Device('meatGrinder', 1700, 'kitchen');
let blender = new Device('blender', 500, 'kitchen');

let saw = new GarageDevice('saw', 2500, 'garage', 'electric', 5);
let drill = new GarageDevice('drill', 350, 'garage', 'electric', 5);

console.log('--------------------------------------------------------------------------------');
console.log(microwave)
console.log(microwave.deviceWattage())
microwave.energeOnOff()
console.log(microwave.aboutDevice())
console.log(microwave.deviceWattage())
meatGrinder.energeOnOff()
meatGrinder.aboutDevice()

console.log('--------------------------------------------------------------------------------');
console.log(saw.aboutDevice())
saw.energeOnOff()
drill.energeOnOff()
blender.energeOnOff()
console.log(saw.deviceWattage())