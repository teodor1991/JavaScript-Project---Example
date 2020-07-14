function greatNumber([arg1, arg2]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    if (num1 > num2) {
        console.log('Num 1 is greater:' + num1);

    } else if (num1 == num2) {
        console.log('Equal!')
    } else {
        console.log('Num 2 is greate:'  + num2); 
    }
    

}

//greatNumber(['4', '5']);
//greatNumber(['6', '5']);
greatNumber(['5', '5']);
