let produtos = ["Teclado", "Mouse", "Monitor", "Gabinete", "Headset", "Mousepad"]
let precos = [120, 80, 450, 350, 200, 35]
let quantidades = [15, 25, 8, 5, 10, 30]
let produtoCaro = "";
let produtoBarato = "";

for (let i = 0; i < produtos.length; i++) {
   if (produtos[i] > produtoCaro ) {
     produtoCaro = produtos[i];

   } if (produtos[i] < produtoBarato) {
      produtoBarato = produtos[i]
   }
    
}

console.log(`O produto mais caro é o ${produtoCaro}. E o mais barato é ${produtoBarato} `);
