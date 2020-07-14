function store([arg1, arg2, arg3]){
let productName = arg1.toLowerCase();
let cityName = arg2.toLowerCase();
let quantity = Number(arg3);

if (cityName == 'sofia'){
    if(productName == 'coffe')
    console.log(quantity * 0.5);
}else if ('water'){
    console.log(quantity * 0.8);
}else if ('beer'){
    console.log(quantity * 1.2);
}else if ('sweets'){
    console.log(quantity * 1.45);
}else if ('penauts'){
    console.log(quantity * 1.6);

    
}else if(cityName == 'plovdiv')
if (productName == 'coffe') {
    console.log(quantity * 0.4);
}else if ('water'){
    console.log(quantity * 0.7);
}else if ('beer'){
    console.log(quantity * 1.15);
}else if ('sweets'){
    console.log(quantity * 1.30);
}else if ('penauts'){
    console.log(quantity * 1.5);
     

}else if (cityName == 'varna')
if (productName == 'coffe') {
    console.log(quantity * 0.45);
}else if ('water'){
    console.log(quantity * 0.7);
}else if ('beer'){
    console.log(quantity * 1.1);
}else if ('sweets'){
    console.log(quantity * 1.35);
}else if ('penauts'){
    console.log(quantity * 1.55);
}
}
store(['coffe', 'varna', '2']);

