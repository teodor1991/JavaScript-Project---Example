function typeOfAnimal([arg1]) {
    let animal = arg1;
    switch (animal) {
            case 'dog': console.log('mammal'); break;
            case 'crocodile':
            case 'tourties' :
            case 'snake' : console.log('reptail'); break;
            default: console.log ('unknow'); break;
            
            
    }
}
//typeOfAnimal (['dog']);
typeOfAnimal (['snake']);
