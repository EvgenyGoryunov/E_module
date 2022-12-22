// задание 1
_prompt = prompt('Введите число, либо текст')


qaz = +_prompt


if (isNaN(qaz)) {
    // текст
    console.log('Упс, кажется, вы ошиблись и ввели не число')
} else if (typeof (qaz) == 'number') {
    // число
    console.log('number')
    if (qaz % 2 == 0) {
        console.log('четное')
    } else {
        console.log('нечетное')
    }

}






// alert(typeof (_prompt))
// alert(typeof (_prompt) + qaz)
// console.log(qaz)
// console.log(typeof (qaz))
// if typeof (qaz) === 'string'{
//     console.log(qaz)
// }



// else {
//     console.log('123')
// }
// console.log(typeof (qaz))






// kurs_valuti = prompt('Введите курс валюты (рубли к выбранной валюте)')
// valuta_kolichestvo = prompt('Введите количество валюты, которые нужно приобрести за рубли')

// valuta_in_valuta = valuta_kolichestvo * kurs_valuti
// alert('Для покупки ' + valuta_kolichestvo + 'у.е. потребутся ' + valuta_in_valuta + ' рублей')

// if (kurs_valuti < 50) {
//     console.log(kurs_valuti + ' курс валют меньше 50')
// } else if (kurs_valuti > 50) {
//     console.log(kurs_valuti + ' курс валют больше 50')
// } else if (kurs_valuti == 50) {
//     console.log(kurs_valuti + ' круто, все работает')
// }

// switch (kurs_valuti) {
//     case "10":
//         console.log('результат равен 0');
//         alert(kurs_valuti + ' десять')
//         break;
//     case "20":
//         console.log('результат равен 0');
//         alert(kurs_valuti + ' двадцать')
//         break;
//     case "30":
//         console.log('результат равен 0');
//         alert(kurs_valuti + ' тридцать')
//         break;
// }



// console.log('Для покупки ' + valuta_kolichestvo + 'у.е. потребутся ' + valuta_in_valuta + ' рублей')


// var a, b

// a = 4;
// b = a / 2

// console.log(b)
// console.log('Hello, World!')
// alert('Hello')
