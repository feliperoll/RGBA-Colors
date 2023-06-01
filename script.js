'use strict'

function getValue(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;
    document.body.style.background = `rgba(${red},${green},${blue},${alpha})`;
    document.querySelector(".codeRGBA").innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}

function copy(){
    let element = document.createElement("textarea");
    element.value = document.querySelector(".codeRGBA").textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copiado!!");
}