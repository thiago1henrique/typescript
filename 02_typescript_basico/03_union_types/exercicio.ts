function toNumber(value: string | number) {
    if(typeof value === 'number') return value;
    else if (typeof value === 'string') return Number(value);
    else {
        throw "Value deve ser um number | string";
    }
}

console.log(toNumber('100'));