// hey kiddo
const adult = function (age){
    if (age > 18) { 
        return true;
    } else {
        return false;
    }
}

const welcome = function(age) {
    if (adult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(welcome(65)) 
console.log(welcome(10))


// vat
const calcVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100)
};

const calcPriceInclVAT = function(basePrice, VATPercentage) {
    const VAT = calcVAT(basePrice, VATPercentage)
    return basePrice + VAT;
};

console.log(calcPriceInclVAT(1000, 21))
console.log(calcPriceInclVAT(2, 9))



const calcBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calcBasePriceVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calcBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calcBasePriceVAT(1210, 21))
console.log(calcBasePriceVAT(2.18, 9))
