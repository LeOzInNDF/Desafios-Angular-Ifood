let dados: string[] = ["Leonardo", "ana", "adriana"];
let dados2: Array<string> = ["Leonardo", "ana", "adriana"];

//Trabalhando com Arrays Multi Types Permite declarar em qualquer ordem
let infos: (string | number)[] = ["Leonardo", 37];

//Tuplas permite declara só na ordem exata. string, number, number...
let boleto: [string, number, number] = ["agua conta", 199.90, 324321352 ];

//Datas
let aniversario: Date = new Date("2023-03-28 08:00");
console.log(aniversario.toString());