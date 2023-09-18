/*
try{

    console.log('Abri um arquivo');
    console.log('Deu erro');
    console.log(a)
    console.log('fechei o arquivo');

}catch(err){

    console.log('tratando o erro');

}finally{

    console.log('Sempre executa');
}*/

function returnDate(date){

    if(date && !(date instanceof Date)){
        
        throw new TypeError('Esperando instância de Date');
    }

    if(!date){
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

try {

    const date = new Date('10-02-1997 11:30:12');
    const hour = returnDate(date);
    console.log(hour);

} catch (error) {
    //tratar erro
}finally{
    console.log('tenha um bom dia');
}

//aula 65