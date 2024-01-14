"use strict";
// let total: string | number = 300;
// total = 'trezentos';
// function isNumber(value: string | number) {
//     return typeof value === "number" ? true : false;
// }
// console.log(isNumber(200))
//---------------------
//optional chaning 
// const button = document.querySelector('button');
// button?.click();
//---------------------
//exercicio
function toNumber(element) {
    if (typeof element === 'number') {
        return element;
    }
    else if (element === 'string') {
        return +element;
    }
    else {
        throw "value deve ser um number ou string";
    }
}
console.log(toNumber(10));
