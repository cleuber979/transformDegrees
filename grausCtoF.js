let showCelcius="";

function transformDegrees(degreesF){
    let transform = (degreesF*9/5)+32
    showCelcius = transform
    
}

transformDegrees(45);

let showF="";

function transformFahrenheit(degreesC){
    let resultdegres = (degreesC-32)*5/9;
    showF = resultdegres;
}

transformFahrenheit(45)

console.log("The result of transformation of Celsius for Fahrenheit  " +showCelcius);

console.log("The result of transformation and Fahrenheit for Celsius " + showF);


