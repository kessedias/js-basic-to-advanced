let control = 0;

while (control <= 10) {
    
    console.log(control);
    control++;
}

function random(min, max){

    const random = Math.random() * (max - min) + min;

    return Math.floor(random);
}

const min = 1;
const max = 50;
let rand = random(min, max);

//checa e depois executa
while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

//faz primeiro e depois checa
do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10)