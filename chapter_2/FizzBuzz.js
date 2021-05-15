console.group('var 1')
for (let i = 1; i <= 100; i++)
{
    let str = String(i); 
    if (i % 3 == 0)
    {
        str = `Fizz`;   
    }
    if((i % 5 == 0) && (i % 3 != 0))
    {
        str = `Buzz`;   
    }
    
    console.log(str);
}
console.groupEnd();
//*********************************************************** */

console.group('var 2')
for (let i = 1; i <= 100; i++)
{
    let str = String(i); 
    if ((i % 3 == 0) && (i % 5 == 0))
    {
        str = `FizzBuzz`;   
    }
    else
    {
        if((i % 3 == 0) && (i % 5 != 0))
        {
            str = `Fizz`;   
        }
        else if ((i % 3 != 0) && (i % 5 == 0))
            {
                str = `Buzz`;   
            }
    }    
    
    console.log(str);
}
console.groupEnd();






