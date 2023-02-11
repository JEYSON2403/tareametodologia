//escribir un programa que obtenga el nobre de usuario de facebook desde la url
//#Ejemplo 
//Entrada: facebook.com/nombreuser
//Salida: nombreuser


let user1="facebook.com/jeysonyanza";
let nameUser1="";

for( let i=0; i <user1.length ;i++){
    if(user1[i]==="/"){
        nameUser1=user1.substring(i+1);
    }
}
console.log("el nombre de usuario es:"+ nameUser1);