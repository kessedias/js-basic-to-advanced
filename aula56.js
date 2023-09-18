const nomes = ['Zé do Gás', 'Valmir', 'Adenor'];

for (let valor of nomes){
    console.log(valor);
}

nomes.forEach(function(value, index, array){
    console.log(value, index, array);
});

//for clássico - Geralment ecom iteráveis (arrays ou strings)
//for in - Retrna o indice ou chave (array, string, objeto)
//for of - Retorna o valor em si (iteráveis, arrays ou strings)