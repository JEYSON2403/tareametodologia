//escribir un programa que obtenga las iniciales de un jugadr que se usa iniciales y numero.
//ejemplo CR-7, LM-10, LFS-10, AV-25

let  nombres="Lionel-Messi";
//let numeros=["7","10","10","25"];

let pri_inicial="";
let seg_inicial="";
let resultado="";

pri_inicial=nombres.substring(0.1);

for ( let i=0; i< nombres.length ;i++){
    if( nombre[i]=== "-"){
        seg_inicial=nombres.substring(i+1,i+2);
    }

}

if(pri_inicial=="C"&& seg_inicial=="R"){
    resultado=pri_inicial+"7;"

}

if(pri=="L" && seg_inicial=="M"){
    resultado=pri_inicial+seg_inicial+"10";

}

console.log("primera inicial"+pri_inicial+"segunda inicial");

console.log("Iniciales:"+ resultado);
