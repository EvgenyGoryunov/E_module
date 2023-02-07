// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


const people = {
    name: 'John',
    age: 15,
    car: 'Lada',
    money: { rub: 2500, evro: 35 }
};


// 1 вариант - мой вариант
functionTest = (str, obj) => {
    console.log('**********************************')
    console.log('functionTest')
    for (let key in obj) {
        if (key == str) {
            return console.log('true', 'Найденный ключ и значение:', key, obj[key]);
        } else {
            return console.log('false', 'Свойство со значением', str, 'не найдено!')
        }
    }
}

functionTest('name', people)

functionTest('qaz', people)


// 2 вариант - более продвинутый, чей-то из модуля
TestTest = (str, obj) => {
    console.log('**********************************')
    console.log('TestTest')
    console.log('Проверяемое свойство', str)
    if (str in obj) return true
    else return false

}

console.log(TestTest('name', people))
console.log(TestTest('qaz', people))