let totalUnion: string | number = '200';
console.log(totalUnion);

function isNumber(value: number | string): boolean {
    if(typeof value === 'number') return true;
    else return false;
}

console.log(isNumber(totalUnion));

const button = document.querySelector('button');
//if(button) button.click();
button?.click(); //forma moderna ?. executa se for diferente de null e undefined