const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let pares = [];
let impares = [];
let numerosMaioresVinte = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] %2 === 0)  { // Indiquei que os números pares dividido por 2 seu resto é igual 0, fazendo com que o sistema o insira no "grupo" dos números pares;
        pares++                    // Percorre todos os números
    } if (numeros[i] % 2 != 0) { // Os números ímpares indiquei que o resto é diferente (!=) de 0, fazendo com que o sistema o insira no "grupo" dos números ímpares;
        impares++
    } if (numeros[i] > 20) { // O sistema analisou se havia algum número maior que 20 e o colocou no "grupo" de números > 20;
        numerosMaioresVinte++
    }
    
}

console.log(`A quantidade de números pares são: ${pares}. Já a quantidade de números ímpares são: ${impares}`);
console.log(`A quantidade de números maiores que 20: ${numerosMaioresVinte}`);


