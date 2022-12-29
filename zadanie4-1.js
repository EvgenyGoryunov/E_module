// Задание 1.

// Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна
// возвращать значение.

printObj = x => {
    console.log('**********************************')
    for (let key in x) {
        if (x.hasOwnProperty(key))
            console.log(key, x[key]);
    }
};

const obj = {
    name: 'John',
    age: 15,
    car: 'Lada',
    money: { rub: 2500, evro: 35 }
};

obj.pol = 'man';

const komnata = {
    room: 'living room',
    furniture: { stol: 'true', stul: 'true', comp: 'false' },
    size: '10m2'
};

printObj(obj)

printObj(komnata)