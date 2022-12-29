const func = (x, n) => console.log(Math.pow(x, n));

func(5, 3)


// вариант из примера модюля
const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

const result = pow(5, 3)
console.log(result) // 125