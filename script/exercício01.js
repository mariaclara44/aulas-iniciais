/*
Você está desenvolvendo um aplicativo de previsão do tempo para o seu bairro.
Durante a última semana, você anotou as temperaturas máximas registradas:

[28, 31, 27, 29, 30, 32, 33] // Domingo a Sábado

Sua mãe está planejando um piquenique e pediu para você analisar como estava o tempo.

Desenvolva um programa que:
1. Calcule a temperatura média da semana
2. Informe a temperatura máxima e em qual dia ela ocorreu
3. Informe a temperatura mínima e em qual dia ela ocorreu
*/


 let temperatura = [28, 31, 27, 29, 30, 32, 33];
 let media = 0;
 let totalTemperatura = 0;

 /* 1. Média da semana; */

for (let i = 0; i < temperatura.length; i++) {
totalTemperatura = totalTemperatura += temperatura [i]
}
media = totalTemperatura/ temperatura.length
 console.log(`A média de temperatura da semana será de: ${media} °`);
 

/* 2. Em qual dia ocorreu a temperatura max */
const semana = ["Dom", "Seg" , "Ter", "Qua", "Qui", "Sex", " Sab"];
const maiorDia = ""
 