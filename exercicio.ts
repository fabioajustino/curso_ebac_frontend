const multiplicar = (numero1:number, numero2:number) => numero1 * numero2;
console.log(multiplicar(3, 4))

const saudar = (nome:string = "") => `Olá ${nome}`;
console.log(saudar("Fabio"))