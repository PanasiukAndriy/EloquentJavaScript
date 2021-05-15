function isEven(n)
{
    if(n > 1)
        return isEven(n - 2);
    else
    {
        if(n == 1) return false;
        if(n == 0) return true;
    }
}

console.log('0 ' + isEven(0));

console.log('1 ' + isEven(1));

console.log('5 ' + isEven(5));
console.log('7 ' + isEven(7));

console.log('10 ' + isEven(10));

console.log('50 ' + isEven(50));
console.log('75 ' + isEven(75));