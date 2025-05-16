const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let desconto = [];
let contador = 0; 
let valorTotalProdutos = 0;
let valorTotalDesconto = 0;
let valorPerdidoPelaLoja = 0;
let valorMedioProdutos = 0; // Valor médio com o desconto

for (let i = 0; i < precos.length; i++) {
    if (precos[i] > 100) {  // Indiquei que os produtos com o preço é maior que 100 tem um desconto 
        desconto[contador] = precos[i] - precos[i] * 0.10 // Calculo 
        valorTotalDesconto = valorTotalDesconto + desconto[contador];
        contador++

    } 
    valorTotalProdutos = valorTotalProdutos + precos[i] // Calculo do valor total dos produtos
    valorPerdidoPelaLoja = valorTotalProdutos - valorTotalDesconto // subtrai o valor total dos produtos pelo valor de desconto para obter o valor que a loja perdeu com os descontos
    valorMedioProdutos = valorTotalDesconto / desconto.length
}

console.log(`O preço dos produtos após o desconto será de: R$${desconto}.`);
console.log(`A loja vai perder com os descontos R$ ${valorPerdidoPelaLoja},00`);
console.log(`A média dos produtos com desconto é de: R$ ${valorMedioProdutos}`);

