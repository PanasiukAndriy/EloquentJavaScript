function SimpleReverse(arrayParam){
    let arrayResult = Array();

    for(let value of arrayParam)
        arrayResult.unshift(value);

    return arrayResult;
}
//console.log(SimpleReverse([1, 2, 3]));
//-------------------------------------

function HardReverse(arrayParam){
      
    let step = 0;
    //for(let step = 0; step < (arrayParam.length - 1); step++)
    {
        // console.log(arrayParam[step+1]);
        // console.log(arrayParam.slice(0, step+1));
        // console.log(arrayParam.slice(step+2));
        
        // console.log('---------------------');
        


        console.log(arrayParam.unshift(arrayParam[step + 1]));
        
        console.log(concat(arrayParam.slice(0, step+1)).concat(arrayParam.slice(step+2)));

       
    }

    console.log('Hard ' + arrayParam);

}

console.log(HardReverse([1, 2, 3]));

