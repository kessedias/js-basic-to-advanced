try{
    console.log(notexist);

}catch(err){

    console.log('Não existe essa variavel');
}

function sum(x,y){

    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ('x e y não são números');
        //throw new ReferenceErrorError('x e y não são números');
        //throw new Error('x e y não são números');
    }

    return x + y;
}

try{
    console.log(sum(1,2));
    console.log(sum(1,'bolinha'));
}catch(err){
    console.log(err);
}
