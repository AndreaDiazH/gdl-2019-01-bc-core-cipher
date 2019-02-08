//document.getElementById("id nuevo en boton").addEventListener("click","function enconde");
//document.getElementById("id nuevo en boton").addEventListener("click","function decode");
//document.getElementById("keepText").addEventListener("click","function getText");
//document.getElementById("id nuevo en boton").addEventListener("click","function getKey");
//document.getElementById("id nuevo en boton").addEventListener("click","function doAgain");


let text; 

function getText() {
    text = document.getElementById("entry").value.toUpperCase();
    document.getElementById("root").style.display = "none";
    document.getElementById("screen1").style.display = "block";
    console.log("el texto recibido es " + text); //solo lo utilizo para saber que la funcion esta obteniendo el valor//
}



function getKey(magic) {
    let number = document.getElementById("key").value;
    let result;  //=cipher.encode(text,parseInt(number));
    if(magic === 1){
      result = cipher.encode(text,parseInt(number));
    }
    else {
      result = cipher.decode(text,parseInt(number));
    }  
    
    document.getElementById("screen1").style.display ="none";
    document.getElementById("screen2").style.display ="block";
    console.log("el numero clave es " + number); //solo lo utilizo para saber que la funcion esta obteniendo el valor//
    document.getElementById("out").value = result;
    document.getElementById("origin").value = text; 
    
}

function doAgain(){
    document.getElementById("key").value = "";
    document.getElementById("entry").value = "";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("root").style.display = "block";
    //esta funcion solo me limpia los textarea y el input numerico y me devuelve a la pantalla inicio//
}
