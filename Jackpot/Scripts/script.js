function getRando(number) {
    var num = Math.round(Math.random() * number);
    num = num.toString();
    // Math.random gives a number betwee 0-.9999999999. Multiplying it by a number, makes that number the highest number. So here it is 0-65
    //Math.round will round our number to the nearest whole number.
    if (num.length < 2) {
        num = "0" + num;    
    }
    return num;
}

function getPBNums() {
    document.getElementById("PB1").innerHTML = getRando(65); //65 is the number in getRando, and it is the number in the second line of code.
    document.getElementById("PB2").innerHTML = getRando(65);
    document.getElementById("PB3").innerHTML = getRando(65);
    document.getElementById("PB4").innerHTML = getRando(65);
    document.getElementById("PB5").innerHTML = getRando(65);
    document.getElementById("PB6").innerHTML = getRando(65);
}




