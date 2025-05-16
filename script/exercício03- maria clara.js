const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]
let mediaDaSala = 0;
let notaTotal = 0;
let alunosAbaixoDaMedia = 0;
let alunosAcimaDaMedia = 0;
let notaMaior = 0;
let notaMenor = notas[0];

for (let i = 0; i < notas.length; i++) {
    notaTotal += notas[i] // Realização da soma das notas de turma, dando o valor total;
        
    if (notas[i] >= 7.75) { //  Verificação dos alunos que tem nota acima de 7.75;
        alunosAcimaDaMedia++ // Percorre o array até localizar essas notas (acima da média), para colocar no "grupo" dos alunos acima da média;

    } if (notas[i] > notaMaior) { // Uma das notas da posição [i] é a maior nota;
      notaMaior = notas[i]  

    } if (notas[i] < notaMenor) {
        notaMenor = notas[i] // Uma das notas da posição [i] é a menor nota;
    }

    } 
    


mediaDaSala = notaTotal / notas.length // Calculo da média da turma, com a soma das notas e dividindo pela quantidade de números no array;

console.log(`A média da sala é: ${mediaDaSala}`);
console.log(`O número alunos acima da média foram: ${alunosAcimaDaMedia} `);
console.log(`A maior nota foi: ${notaMaior}. E a menor nota foi: ${notaMenor}`);


