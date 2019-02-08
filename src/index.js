
document.getElementById("keepText").addEventListener("click",getText);
document.getElementById("code1").addEventListener("click",function(){getKey(1);});
document.getElementById("code2").addEventListener("click",function(){getKey(2);});
document.getElementById("goBack").addEventListener("click", doAgain);
//element.addEventListener("click", function(){ alert("Hello World!"); });

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
      result = cipher.encode(parseInt(number),text);
    }
    else {
      result = cipher.decode(parseInt(number),text);
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
