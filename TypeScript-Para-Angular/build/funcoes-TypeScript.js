"use strict";
//Funções
//function addNumber(x: number, y: number): number {
//return x + y;
//}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(addToHello('Leonardo'));
//Funções
function addNumber(x, y) {
    return x + y;
}
function addToHello2(name) {
    return `Hello ${name}`;
}
//let soma: number = addNumber(4, 7 );
console.log(addToHello2('Leonardo'));
//Funções Multi Tipos
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(123456789));
//Funções Async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Leonardo";
    });
}
