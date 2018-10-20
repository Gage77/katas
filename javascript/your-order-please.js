function order(words) {
    if (words.length === 0)
        return words;
    
    words = words.split(' ');
    let finalWord = [];

    for (let i = 0; i < words.length + 1; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].indexOf(i) != -1)
                finalWord[i] = words[j];
        }
    }

    return finalWord.join(' ').trim();
}

console.log(order("is2 Thi1s T4est 3a"), "|| Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "|| Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")