function task4(start, stop) {

    let num = start;

    const intervalId = setInterval(function () {
        console.log(num);
        num++;
        // console.log(num);
        if (num == stop + 1) {
            clearInterval(intervalId);
            console.log('Отсчет закончен');
        }
    }, 1000);







    // if (num = stop) {

    // }

}

task4(5, 10)



// let a

// const qaz = setInterval(function (start, stop) {
//     let a = start
//     console.log(a + stop);
//     a++;

// }, 1000, 1, 2)