function ganderAndAge([arg1, arg2]) {
 let age = Number(arg1);
 let gander = arg2; 
if (gander == 'f'){
 if (age < 16) {
     console.log('Miss');
 }else{
     console.log('Ms.');
 }
}else{
    if (age < 16) {
        console.log('Master');
    }else{
        console.log('Mr.');
    }
}
}

ganderAndAge(['12', 'f']);
