//I'm sure there was probably a better way to write this
//BUT IT WORKS
//Fat Flock
const birdStates = {
    base: "birdbounce.gif",
    tie: "birdbouncetie.gif",
    crown: "birdbouncecrown.gif",
    hat: "birdbouncehat.gif"
};

function setBird(type) {
    document.getElementById("bird-gif").src =
    "creatures/bird/" + birdStates[type];
}

//Grem
const gremStates = {
    base: "grem.gif",
    tie: "gremtie.gif",
    crown: "gremcrown.gif",
    hat: "gremhat.gif"
};

function setGrem(type) {
    document.getElementById("grem-gif").src =
    "creatures/grem/" + gremStates[type];
}

//Onion Boy
const onionStates = {
    base: "onionboy.gif",
    tie: "onionboytie.gif",
    crown: "onionboycrown.gif",
    hat: "onionboyhat.gif"
};

function setOnion(type) {
    document.getElementById("onion-gif").src =
    "creatures/onionboy/" + onionStates[type];
}

//GCC
const gccStates = {
    base: "gcc.gif",
    tie: "gcctie.gif",
    crown: "gcccrown.gif",
    hat: "gcchat.gif"
};

function setGcc(type) {
    document.getElementById("gcc-gif").src =
    "creatures/gcc/" + gccStates[type];
}

//Baby Bot
const babyStates = {
    base: "babybot.gif",
    tie: "babybottie.gif",
    crown: "babybotcrown.gif",
    hat: "babybothat.gif"
};

function setBaby(type) {
     document.getElementById("baby-gif").src =
    "creatures/babybot/" + babyStates[type];
}