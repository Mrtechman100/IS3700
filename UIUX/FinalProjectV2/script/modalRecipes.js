// Script for Recipe Modals

// COOKIES
// Chocolate Chip Cookie
var chocoChipCookie = document.getElementById("chocoChipCookie-modal");
var chocoChipCookieBtn = document.getElementById("chocoChipCookie-open");
var chocoChipCookieClose = document.getElementsByClassName("chocoChipCookie-close");

chocoChipCookieBtn.onclick = function() {
    chocoChipCookie.style.display = "block";
    document.body.style.overflow = "hidden";
    }


for (var i = 0; i < chocoChipCookieClose.length; i++) {
    chocoChipCookieClose[i].onclick = function() {
        chocoChipCookie.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Pumpkin Cookie
var pumpkinCookie = document.getElementById("pumpkinCookie-modal");
var pumpkinCookieBtn = document.getElementById("pumpkinCookie-open");
var pumpkinCookieClose = document.getElementsByClassName("pumpkinCookie-close");

pumpkinCookieBtn.onclick = function() {
    pumpkinCookie.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < pumpkinCookieClose.length; i++) {
    pumpkinCookieClose[i].onclick = function() {
        pumpkinCookie.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// PB Cookie
var pbCookie = document.getElementById("pbCookie-modal");
var pbCookieBtn = document.getElementById("pbCookie-open");
var pbCookieClose = document.getElementsByClassName("pbCookie-close");

pbCookieBtn.onclick = function() {
    pbCookie.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < pbCookieClose.length; i++) {
    pbCookieClose[i].onclick = function() {
        pbCookie.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// BREADS
// Banana Bread
var bananaBread = document.getElementById("bananaBread-modal");
var bananaBreadBtn = document.getElementById("bananaBread-open");
var bananaBreadClose = document.getElementsByClassName("bananaBread-close");

bananaBreadBtn.onclick = function() {
    bananaBread.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < bananaBreadClose.length; i++) {
    bananaBreadClose[i].onclick = function() {
        bananaBread.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// BAR DESSERTS
// Indoor S'mores
var indoorSmores = document.getElementById("indoorSmores-modal");
var indoorSmoresBtn = document.getElementById("indoorSmores-open");
var indoorSmoresClose = document.getElementsByClassName("indoorSmores-close");

indoorSmoresBtn.onclick = function() {
    indoorSmores.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < indoorSmoresClose.length; i++) {
    indoorSmoresClose[i].onclick = function() {
        indoorSmores.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Oatmeal Fudge Bars
var oatmealFudgeBars = document.getElementById("oatFudge-modal");
var oatmealFudgeBarsBtn = document.getElementById("oatFudge-open");
var oatmealFudgeBarsClose = document.getElementsByClassName("oatFudge-close");

oatmealFudgeBarsBtn.onclick = function() {
    oatmealFudgeBars.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < oatmealFudgeBarsClose.length; i++) {
    oatmealFudgeBarsClose[i].onclick = function() {
        oatmealFudgeBars.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Peppermint Oreo Bars
var peppermintOreoBars = document.getElementById("pepOreo-modal");
var peppermintOreoBarsBtn = document.getElementById("pepOreo-open");
var peppermintOreoBarsClose = document.getElementsByClassName("pepOreo-close");

peppermintOreoBarsBtn.onclick = function() {
    peppermintOreoBars.style.display = "block";
    document.body.style.overflow = "hidden";
    }

for (var i = 0; i < peppermintOreoBarsClose.length; i++) {
    peppermintOreoBarsClose[i].onclick = function() {
        peppermintOreoBars.style.display = "none";
        document.body.style.overflow = "auto";
    }
}