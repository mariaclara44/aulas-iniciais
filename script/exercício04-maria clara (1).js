const temperaturasCelsius = [0, 10, 20, 30, 40];
let temperaturasFahrenheit = []; // Está em conchetes pois irá receber um novo array;

for (let i = 0; i < temperaturasCelsius.length; i++) {
    temperaturasFahrenheit[i] = temperaturasCelsius[i] * 9/5 + 32; // Conversão da temperatura para Fahrenheit é F = C * 9/5 + 32, e a temperatura em Celsius com o [i] poruqe faz o programa percorrer todo o array para realizar o cálculo, com todos os númros presentados;
}

console.log(`Tempratura em Celsius`); 
console.table (temperaturasCelsius);

console.log(`Temperatura em Fahrenheit`);
console.table(temperaturasFahrenheit);