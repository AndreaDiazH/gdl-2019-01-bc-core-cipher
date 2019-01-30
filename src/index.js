let text;

function getText() {
    text = document.getElementById("entry").value;
    document.getElementById("root").style.display = "none";
    document.getElementById("screen1").style.display = "block";
    console.log("el texto recibido es " + text);
}

function getKey() {
    let number = document.getElementById("key").value;
    //let result = encode(text,number);
    document.getElementById("screen1").style.display ="none";
    document.getElementById("screen2").style.display ="block";
    console.log("el numero clave es " + number); 
    //document.getElementById("out").value = result;
    document.getElementById("origin").value = text; 
    
}

function doAgain(){
    document.getElementById("key").value = "";
    document.getElementById("entry").value = "";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("root").style.display = "block";

}
