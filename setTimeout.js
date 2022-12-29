// setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sum(a, b) {

    console.log(a + b);

}

setTimeout(sum, 1000); // задержка 1 секунда


function sum(a, b) {

    console.log(a + b);

}


setTimeout(sum, 1000, 1, 2); // задержка 1 секунда


setTimeout(function (a, b) {

    console.log(a + b);

}, 1000, 1, 2); // задержка 1 секунда



const intervalId = setInterval(function (a, b) {

    console.log(a + b);

}, 1000, 1, 2);

clearInterval(intervalId)