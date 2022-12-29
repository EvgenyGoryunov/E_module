function func(num) {
    if (num > 0 && num <= 1000) {

        if (num / num == 1 && num > 1) {
            str = 'число простое'
        }
    } else { str = 'число непростое' };

    console.log(str);

}

func(4)
func(0)
func(1)
func(-1245)
func(152)