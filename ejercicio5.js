//escribir un programa para obtener el nombre de usuario de un correo electronico

//ejemplo
//entrada: nombredeuser@magbdigital.net
//salida: nombredeuser

let correo= "jeysojose@hotmail.es";
let nameUser="";

for(let i=0; i<correo.length; i++){
    if(correo[i]==="@") {
        nameUser=correo.substring(0,i);
    }
}

console.log("el nombre de usuario es:"+nameUser);