function binary (Arr,value){
    var low  = 0 ;
    var high = Arr.length -1;
    var mid;     

    while (low <= high) {
        mid = Math.floor((low+high)/2);     
        if(Arr[mid] == value) 
            return mid ; 
        else if (Arr[mid]<value) 
            low = mid+1;
        else 
            high = mid-1;          
    }
    return -1;
}

console.log(binary([1, 4, 7, 9, 14], 4), "|| 1");
console.log(binary([1, 4, 7, 9, 14], 40), "|| -1");