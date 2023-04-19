const trim1= function(){
    let str = " functionUp  "
    let str1 = str.trim();
    console.log("The string before applying trim [",str,"] the string after applying trim : [",str1,"]");
}
const changeToLowerCase = function(){
    let str = "Jasmeen"
    let str1 = str.toLowerCase();
    console.log("The string before applying lowerCase :",str," the string after applying trim : ",str1,"");
}
const changeToUpperCase = function(){
    let str = "Jasmeen"
    let str1 = str.toUpperCase();
    console.log("The string before applying UpperCase :",str," the string after applying trim : ",str1,"");
}
module.exports.trim1=trim1;
module.exports.changeToLowerCase=changeToLowerCase;
module.exports.changeToUpperCase=changeToUpperCase;
