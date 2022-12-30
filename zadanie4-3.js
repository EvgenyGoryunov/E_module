// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.







function test() {
    return Object.create(null)
}

console.log(test())


// Ошибка, кот возникает, если в скобках без (null)
// zadanie4-3.js:2 Uncaught TypeError: Object prototype may only be an Object or null: undefined
//     at Function.create (<anonymous>)
//     at test (zadanie4-3.js:2:19)
//     at zadanie4-3.js:5:13