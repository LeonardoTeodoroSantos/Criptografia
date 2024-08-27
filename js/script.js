function code() {
    var input = document.getElementById("content__esq--input").value
    input = input.replaceAll("e","enter");
    input = input.replaceAll("i","imes");
    input = input.replaceAll("a","ai");
    input = input.replaceAll("o","ober");
    input = input.replaceAll("u","ufat");
    document.getElementById("output").innerHTML = input;
}

function decode() {
    let input = document.getElementById("content__esq--input").value
    input = input.replaceAll("enter","e");
    input = input.replaceAll("imes","i");
    input = input.replaceAll("ai","a");
    input = input.replaceAll("ober","o");
    input = input.replaceAll("ufat","u");
    document.getElementById("output").innerHTML = input;
}

function toHidden(){
    var x = document.getElementById("content__dir--nothidden");
    if (x.style.display != 'none') {
        x.style.display = 'none'
    };
}

function toShow(){
    document.getElementById("copy__button--hidden").style.display = 'block';
    document.getElementById("content__dir--hidden").style.display = 'flex';
}

function toCopy() {
    let copyText = document.getElementById("output");
    navigator.clipboard.writeText(copyText.value);
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function getHeight() {
    divElement = document.querySelector(".main");
    elemWidth = divElement.clientWidth;
    
    if (elemWidth >= 375) {
        document.getElementById("content__esq--input").style.height = "60.8rem";
    }
}