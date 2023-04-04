//Funções
//function addNumber(x: number, y: number): number {
  //return x + y;
//}

function addToHello(name: string): string {
  return `Hello ${name}`;
}

let soma: number = addNumber(4, 7 );

console.log(addToHello('Leonardo'));

//Funções
function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHello2(name: string): string {
  return `Hello ${name}`;
}

//let soma: number = addNumber(4, 7 );

console.log(addToHello2('Leonardo'));

//Funções Multi Tipos
function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone(123456789));

//Funções Async
async function getDatabase(id: number): Promise<string>{
  return "Leonardo"
}
