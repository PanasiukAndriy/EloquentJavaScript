function CountChar(strParam, charParam)
{
    let counter = 0;
    for (let index = 0; index < strParam.length; index++) {
        if (strParam[index] == charParam[0]) counter++;

    }
    return counter;
}




console.log(CountChar('asdafsdasdsdtBcsdecfdsortBujsyujtidfrByociBBtysdhti', 'F'));