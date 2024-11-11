const age = prompt("What is your age?");

if (age >= 65) {
    document.getElementById("verify").innerHTML = "Free Friday Coffee Night for Seniors!";
    document.getElementById("verify").style.color = "red";
    document.getElementById("verify").style.fontVariant = "small-caps";
    document.getElementById("verify").style.fontSize = "1.5em";
} else {
    document.getElementById("verify").innerHTML = "Enjoy Music and Make Memmores!";
}