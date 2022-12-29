
function test(func, a, b) {

    // func(a, b);

    return function () {
        func(a, b);
        // console.log('222');
    }

}

function getNumOne(a, b) {

    console.log(a + b);
}


const qaz = test(getNumOne, 1, 2)

// вызов функции
qaz()

// такой вызов не работает, так как будет выходится тупо код функции, см ниже
// ƒ () {
//     func(a, b);
//     // console.log('222');
// }
console.log(qaz);