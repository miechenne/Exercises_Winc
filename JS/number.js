const largerSum = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(largerSum(150))
console.log(largerSum(50))
console.log(largerSum(0))
console.log(largerSum(999))




const bouncer = function(maxVisitors,currentVisitors,agePotentialVisitor) 
    {
    if (agePotentialVisitor < 18) {
        return "this is a club for adults";
    }
    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
}

console.log(bouncer(3500, 0, 15))
console.log(bouncer(3500, 1995, 55))
console.log(bouncer(3500, 2010, 30)) 
console.log(bouncer(3500, 2010, 25))





const calcAverage = function(number1, number2, number3, number4, number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calcAverage(6, 10, 46, 50, 66))
console.log(calcAverage(9, 13, 55, -41, 78))
console.log(calcAverage(100, 1, 98, 22, 500))