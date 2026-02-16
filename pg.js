let r =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","+","=","[","]","{","}",":",";","/"];
let text1="";
let text2="";
function cv(){
    let text1="";
    let text2="";
for(let i =0 ; i<15;i++){
    text1+=r[Math.floor(Math.random()*r.length)];
    text2+=r[Math.floor(Math.random()*r.length)];

}
document.getElementById("f").textContent=text1;
document.getElementById("g").textContent=text2;
}
function copyText(){
    const textToCopy = document.getElementById("f").textContent;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied: "+textToCopy);
    
}
function copyText1(){
    const textToCopy1 = document.getElementById("g").textContent;
    navigator.clipboard.writeText(textToCopy1);
    alert("Copied: "+textToCopy1);
}
