function SimpleReverse(arrayParam){
    let arrayResult = Array();

    for(let value of arrayParam)
        arrayResult.unshift(value);

    return arrayResult;
}
console.log(SimpleReverse([1, 2, 3]));
//-------------------------------------

function HardReverse(arrayParam){
      
    let step = 0;
    for(let step = 0; step < (arrayParam.length - 1); step++)
    {
        arrayParam.unshift(arrayParam[step + 1]);        
        arrayParam = arrayParam.slice(0, step+2).concat(arrayParam.slice(step+3))       
    }
    console.log('Hard ' + arrayParam);
}

console.log(HardReverse([1, 2, 3, 4, 5]));

