let text

function getText() {
    text = getElementById("entry").value
    getElementById("root").style.display = "none"
    getElementById("screen1")style.display = "block"
}

console.log("el texto recibido es " + text);
