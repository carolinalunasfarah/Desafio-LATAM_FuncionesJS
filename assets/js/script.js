let ele = document.getElementById("ele1");

function pintar (color = "green"){
    elemento = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

pintar ();

ele.addEventListener("click", function pintar() {
    ele.style.backgroundColor = "yellow";
});