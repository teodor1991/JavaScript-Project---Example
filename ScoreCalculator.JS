function scoreCalculator([arg1]) {
    let num = Number(arg1);
    let bonusPoint = 0;

    if (num <= 100) {
        bonusPoint = 5;
    } else if (num > 1000) {
        bonusPoint = 0.1 * num;
    } else if (num > 100) {
        bonusPoint = 0.2 * num;
    }

    if (num % 2 == 0) {
        bonusPoint = bonusPoint + 1;

    } else if (num % 10 == 5) {
        bonusPoint += 2; // + oznachava syshtata promenliva 
    }
    console.log(bonusPoint);
    console.log(num + bonusPoint);

}

scoreCalculator(['2703']);
//scoreCalculator(['15875']);
