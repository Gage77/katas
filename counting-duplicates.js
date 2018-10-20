function duplicateCount(text) {
    let lower = text.toLowerCase();
    
    let dups = [];
    let sums = [];
    let temp = '';
    let sum = 0;

    for (let i = 0; i < lower.length; i++) {
        temp = lower[i];
        if (dups.indexOf(temp) == -1) {
            dups.push(temp);
        }
        else {
            if (sums.indexOf(temp) == -1) {
                sums.push(temp);
                sum += 1
            }
        }
    }
    return sum;
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  