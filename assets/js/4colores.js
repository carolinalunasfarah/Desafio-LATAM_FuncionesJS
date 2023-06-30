let dblue = document.getElementById("1blue");
let dred = document.getElementById("2red");
let dgreen = document.getElementById("3green");
let dyellow = document.getElementById("4yellow");
let dkey = document.getElementById("key");

let blackbg = (changebg) => {
    changebg.target.style.backgroundColor = "black";
};

dblue.addEventListener("click", blackbg);
dred.addEventListener("click", blackbg);
dgreen.addEventListener("click", blackbg);
dyellow.addEventListener("click", blackbg);

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        dkey.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        dkey.style.backgroundColor = "orange";
    }
    else if (event.key === "d") {
        dkey.style.backgroundColor = "cyan";
    }
});
