function showChess(size)
{        
    let rowTemplate = String('');
    let reverseRowTemplate = String('');
    let totalTemplate = String('');
    let rows = Array();

    //build row templates
    for (let i = 1; i <= size; i++)
    {
        if(i % 2 == 0)
        {
            rowTemplate += '#';
            reverseRowTemplate += ' ';
        }
        else
        {
            rowTemplate += ' ';
            reverseRowTemplate += '#';
        }    
    }
    //end row templates
    

    for (let i = 1; i <= size; i++)
    {
        if(i % 2 == 0)
        {
            rows.push(rowTemplate);
        }
        else
        {
            rows.push(reverseRowTemplate);
        }    
    }

    totalTemplate = rows.join('\n');

    console.log(totalTemplate);
}

showChess(8);

