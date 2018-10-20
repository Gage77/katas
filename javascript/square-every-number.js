function squareDigits(num) {
    let splitnums = num.toString().split('');
    for (let i = 0; i < splitnums.length; i++) {
        splitnums[i] = splitnums[i] * splitnums[i];
    }
    return +splitnums.join('');
}

console.log(squareDigits(9119), 811181);