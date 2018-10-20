function GetSum(a, b)
{
    let sum = 0;
    let start = a < b ? a : b;
    let end = a < b ? b : a;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(GetSum(0,-1),-1);
console.log(GetSum(0,1),1);
console.log(GetSum(1,1),1);