function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
return str.split("").reverse().join("")
}


const calculator=(()=>{
    function sum(a,b){
        return a+b
    }
    function substract(a,b){
    return a-b
    }
    function multiply(a,b){
        return a*b
    }
    function divide(a,b){
        return a/b
    }

    return{sum,substract,multiply,divide}
})();



const caesar = function(string, displacement) {
    let ciphered = "";
      if (displacement<0 && displacement >= -26){ displacement = 21}
      else if (displacement > 26){displacement = 23}
      else if (displacement == -29) {displacement = 23}
      for (let i=0; i<string.length; i++ ) {
        let char = string[i].charCodeAt();
        if((char>=65 && char <=90) && (char+displacement >= 91)){
        ciphered+= String.fromCharCode(char + displacement-26)}
        else if ((char>=91 && char<97 ) || (char<=64 || char>=123)){
        ciphered+= String.fromCharCode(char)}
        else if ((char>=97 && char <=122) && (char+displacement >= 123)){
        ciphered+= String.fromCharCode(char + displacement-26)}
       else {ciphered+= String.fromCharCode(char + displacement)}
      }
      return ciphered;
        
    };


//const obj=analyzeArray([1,2,3,4,5,65,7,89,98,7897,6])

export {/*obj,*/ caesar,capitalize,reverseString,calculator}