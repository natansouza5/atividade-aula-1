//crie um programa que cadastre apenas produtos com mais de 100 gramas. Mas, se o nome do produto ter menos de 3 letras exiba uma mensagem de erro.
// caso tenha mais de 10 produtos exiba uma mensagem de que o carrinho está cheio

// //produtos no carrinho
// let ListaProdutos = ['mouse', 'teclado', 'ssd']
// let espaçoCarrinho = (10 - ListaProdutos.length)
// if (ListaProdutos.length > 10) {
//   console.log('Carrinho cheio, O limite é 10')
// } else {
//   console.log(`o carrinho ainda tem espaço para ${espaçoCarrinho} itens`)
// }

//Peso do produto
let produto = 'teclado'
let pesoProduto = 150

if (produto.length < 3) {
  console.log('Nome inválido, o nome precisa ter no mínimo 3 letras')
} else if (pesoProduto > 200) {
  console.log(`Esse ${produto} excede o limite de peso de 200 gramas`)
} else {
  console.log(`Esse ${produto} pesa ${pesoProduto} gramas`)
}
