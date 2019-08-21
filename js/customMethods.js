
// Methods for String
String.prototype.toTitleFormat = function() {
    var words = this.toLocaleLowerCase().split(' ')
    var output = ""
    for (let word of words) {
        for (var i = 0; i < word.length; i++) {
            if (i == 0) { // first letter
                output += word[i].toLocaleUpperCase()
            }
            else output += word[i]
        }
        output += " "
    }
    return output
}

// Methods for Number
Number.prototype.primeFactorize = function() {
    var n = this.valueOf()
    if (n < 2) {
        return null;
    }
    var factors = [],
        divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors
}

Number.prototype.isPrime = function() {
    var n = this.valueOf()
    var isPrime = true;

    if (n < 2) { isPrime = false; return isPrime }
    if (n == 2) return isPrime

    for (let i = 2; i < n; i++) {
        if (n % i == 0) { isPrime = false; return isPrime }
    }

    return isPrime
}