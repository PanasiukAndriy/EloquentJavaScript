console.group('var 1');
let str = '#';
for(; str.length <= 7; str += '#')
{    
    console.log(str);
}
console.groupEnd();


console.group('var 2');

for(let i = 1; i <= 7; i++)
{    
    console.log('#'.repeat(i));
}
console.groupEnd();

