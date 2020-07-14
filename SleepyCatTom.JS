function sleepyCatTom([arg1]){

let holiday = Number(arg1);
let workingDays = (365 - holiday);
let totalPlayMinets = (workingDays * 63 + holiday * 127);
let difference = Math.abs(totalPlayMinets - 30000);
let hours = Math.abs(difference / 60) ;
let minutes = Math.abs(difference % 60) ;

if (totalPlayMinets > 30000) {

    console.log('Tom will run away');
    console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes more for play`);
} else {
    console.log('Tom sleeps well');
    console.log(` ${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes less for play
    `);
}

}

//sleepyCatTom([20]);
sleepyCatTom([113]);    
