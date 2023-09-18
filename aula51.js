const pessoa = {
    nome: 'Zezinho',
    sobrenome: 'Do Gás',
    idade: 30,
    endereco:{
        rua: 'Av. Brasil',
        numero: 666
    }
}

//Atribuição via desestruturação
const {nome, sobrenome, idade, ...resto} = pessoa
const {endereco: {rua, numero}} = pessoa

console.log(nome, sobrenome, idade, resto)
console.log(rua, numero)