let ele = document.getElementById("ele1");

function paint (color = "green"){
    elemento = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

paint ();

ele.addEventListener("click", function paint() {
    ele.style.backgroundColor = "yellow";
});