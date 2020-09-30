plusBut = document.getElementById("plusBut");
plusOperation = function() {
    ang1 = document.getElementById("ang1");
    ang2 = document.getElementById("ang2");

    sum = parseInt(ang1.value) + parseInt(ang2.value);

    result = document.getElementById("result");
    result.value = sum;
}

plusBut.addEventListener("click",plusOperation);

minBut = document.getElementById("minBut");
minusOperation = function() {
    ang1 = document.getElementById("ang1");
    ang2 = document.getElementById("ang2");

    minus = parseInt(ang1.value) - parseInt(ang2.value);

    result = document.getElementById("result");
    result.value = minus;
}

minBut.addEventListener("click",minusOperation);

mulBut = document.getElementById("mulBut");
multiplyOperation = function() {
    ang1 = document.getElementById("ang1");
    ang2 = document.getElementById("ang2");

    multi = parseInt(ang1.value) * parseInt(ang2.value);

    result = document.getElementById("result");
    result.value = multi;
}

mulBut.addEventListener("click",multiplyOperation);

divBut = document.getElementById("divBut");
divideOperation = function() {
    ang1 = document.getElementById("ang1");
    ang2 = document.getElementById("ang2");

    divide = parseInt(ang1.value) / parseInt(ang2.value);

    result = document.getElementById("result");
    result.value = divide;
}

divBut.addEventListener("click",divideOperation);