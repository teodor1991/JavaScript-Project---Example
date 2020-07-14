function sumTimes([arg1, arg2, arg3]) {
    let firstTime = parseInt = (arg1);
    let secondTime = parseInt = (arg2);
    let thirdTime = parseInt = (arg3);

    let sumTimes = (firstTime  +  secondTime  +  thirdTime);
    let minutes = Math.floor(sumTimes / 60);
    let seconds = sumTimes % 60;

    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

    console.log(minutes + ":" + seconds);

}
    sumTimes([35, 45, 44]); 
