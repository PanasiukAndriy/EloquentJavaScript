function Range(start, end, step = 1){
    if(step == 0) return; //error

    let min = Math.min(start, end);
    let max = Math.max(start, end); 
    let resultArray = Array();
    for (let index = min; (min <= index) && (index <= max); index += step) {        
        resultArray.push(index);        
    }
    return resultArray;
}

function MySum(arrayParam){
    let totalSum = Number(0);
    for(let value of arrayParam)
        totalSum += value;

    return totalSum;
}

console.log(Range(2, -3));

console.log(MySum(Range(2, -3)));

