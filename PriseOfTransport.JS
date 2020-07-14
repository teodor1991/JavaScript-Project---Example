function  transportPrise ([distance, dayOrNight]){
    

    let prise = 0;
    let taxiRate = 0;

    if (dayOrNight == "day"){
        taxiRate = 0.79;
    } else {
        taxiRate = 0.90;
    }

    if (distance < 20){
        prise = 0.70 + (distance * taxiRate);
    } else if (distance < 100){
        prise = distance * 0.09;
    } else{
        prise = distance * 0.06;
    }
    console.log(prise);
    

}

transportPrise(['180','night']);
