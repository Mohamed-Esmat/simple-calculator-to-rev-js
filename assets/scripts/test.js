let num;
function double() {
    num = num * 2;
}

function transform(num1 , double) {
    num = num1;
    double();
}

transform(10, double);