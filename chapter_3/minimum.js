function MyMin(a, b)
{
    if(isNaN(a) || isNaN(b))
    {
        return 'incorrect values';         
    }
    else
    {
        return (a >= b) ?  a :  b;
    }        
}

console.log(MyMin(2, 3))

console.log(MyMin(2, 'a'))