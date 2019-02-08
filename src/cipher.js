window.cipher = {
  // ... 
 
encode : function (number,text){
  
  let result = ''; 
    
  for (let i = 0; i < text.length; i++){
    let knowPo = text.charCodeAt(i);// esto me regresa el 65, saber posicion puede ser knowPo
    console.log(knowPo + ' ' + text.charAt(i));
    let addNumber = ((knowPo - 65) + number)%26 + 65;// puede ser addNumber
    console.log(addNumber); //esto solo lo necesito yo en realidad
    let changeLe = String.fromCharCode(addNumber); //esto convierte el resultado numerico de addnumber a letra y puede llamarse changeLe
    result += changeLe; 
  }
  return result; //aqui le estoy diciendo que me devuelva la letra(s) que cambio
},

decode : function (number,text){
  
  let result = ''; 
    
  for (let i = 0; i < text.length; i++){
    let knowPo = text.charCodeAt(i);// esto me regresa el 65, saber posicion puede ser knowPo
    console.log(knowPo + ' ' + text.charAt(i));
    let addNumber = ((knowPo + 65) - number)%26 + 65;// puede ser addNumber
    console.log(addNumber); //esto solo lo necesito yo en realidad
    let changeLe = String.fromCharCode(addNumber); //esto convierte el resultado numerico de addnumber a letra y puede llamarse changeLe
    result += changeLe; 
  }
  return result; //aqui le estoy diciendo que me devuelva la letra(s) que cambio
}

};
