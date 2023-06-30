let dblue = document.getElementById("1blue");
let dred = document.getElementById("2red");
let dgreen = document.getElementById("3green");
let dyellow = document.getElementById("4yellow");
let dkey = document.getElementById("key");

// Black background change
let blackbg = (changebg) => {
    changebg.target.style.backgroundColor = "black";
};

dblue.addEventListener("click", blackbg);
dred.addEventListener("click", blackbg);
dgreen.addEventListener("click", blackbg);
dyellow.addEventListener("click", blackbg);

// New div
function createNewDiv (bgcolor) {
    let newdiv = document.createElement("div");
    newdiv.style.height = "200px";
    newdiv.style.width = "200px";
    newdiv.style.margin = "3rem";

    let newContent = document.createElement("div")
    newdiv.appendChild(newContent);
    newdiv.style.backgroundColor = bgcolor;
    document.body.appendChild(newdiv);
}

// Keydown events
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        dkey.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        dkey.style.backgroundColor = "orange";
    }
    else if (event.key === "d") {
        dkey.style.backgroundColor = "cyan";
    }
    else if (event.key === "q") {
        createNewDiv("magenta");
    }
    else if (event.key === "w") {
        createNewDiv("purple");
    }
    else if (event.key === "e") {
        createNewDiv("skyblue");
    }
});