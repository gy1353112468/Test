var navul = document.getElementById("navul");
var navButton = document.getElementById("navbutton");
var buttonSpan =  navButton.getElementsByTagName("span");
var logo = document.getElementById("logo");
var nav = document.getElementsByTagName("nav");
var navID = document.getElementById("nav");
var scHeight = window.screen.height;
var scWidth = window.screen.width;
var hdHeight = document.getElementsByTagName("header")[0].offsetHeight;
navul.style.top = hdHeight + 10 + "px";
navID.style.width = scWidth + "px";
navID.style.height = scHeight + "px";
function navDown() {
    // navButton.classList.add("navbutton");
    logo.classList.add("navfontColor");
    for (var i =0; i < buttonSpan.length; i++){
        buttonSpan[i].classList.add("buttonspan");
    }
    logo.style.zIndex = "10";
    navButton.style.zIndex = "10";
    navID.style.display = "block";
    navID.classList.add("navColor");
}
window.onload = function () {
    var loadHome = document.getElementsByClassName("circle");
    var planeW = document.getElementById("plane").offsetWidth;
    var propellerW = document.getElementById("propeller");
    propellerW.style.width = 218 / 800 * planeW + "px";
    document.getElementsByClassName("plane-wrapper")[0].style.width = planeW + "px";
    var loadGif = document.getElementsByClassName("loading-gif");
    var timedLoading = setInterval(function () {
        loadGif[0].style.display = "none";
        loadHome[0].classList.add("active");
        clearInterval(timedLoading);
    }, 1500);
    var opacityPlay = document.getElementsByClassName("opacity_play");
    var planePlay = document.getElementsByClassName("plane_play");
    var timedPlanemove = setInterval(function () {
        for (var i = 0; i < opacityPlay.length; i++){
            opacityPlay[i].classList.add("opacityPlay");
        }
        planePlay[0].classList.add("planeMove");
        clearInterval(timedPlanemove);
    }, 2500);
    var timedPlaneplay = setInterval(function () {
        planePlay[0].classList.add("planePlay");
        clearInterval(timedPlaneplay);
    }, 3200);
    var noteP = document.getElementById("notep");
    var noteString1 = "BetaAppHost";
    var noteString2 = "{";
    var noteString3 = "return \"fir.im\"";
    var noteString4 = "}";
    var timedNoteplay = setInterval(function () {
        var index = 0;
        clearInterval(timedNoteplay);
        setTimeout(notePrint(index, noteString1), 100);
        function notePrint(_index, str) {
            return function () {
                if (_index <= noteString1.length) {
                    noteP.innerHTML = str.substring(0, _index) + "<span>|</span>";
                    index++;
                }else if (_index <= noteString1.length + noteString2.length){
                    noteP.innerHTML = noteString1 + "<br>" + str.substring(0, _index - noteString1.length) + "<span>|</span>";
                    index++;
                }else if (_index <= noteString1.length + noteString2.length + noteString3.length){
                    noteP.innerHTML = noteString1 + "<br>" + noteString2 + "<br>" + "&emsp;&emsp;" + str.substring(0, _index - noteString1.length - noteString2.length)  + "<span>|</span>";
                    index++;
                }else if (_index <= noteString1.length + noteString2.length + noteString3.length + noteString4.length){
                    noteP.innerHTML = noteString1 + "<br>" + noteString2 + "<br>" + "&emsp;&emsp;" + noteString3 + "<br>" + str.substring(0, _index - noteString1.length - noteString2.length - noteString3.length)  + "<span>|</span>";
                    index++;
                }
                if (index <= noteString1.length) {
                    setTimeout(notePrint(index, noteString1), 100);
                }else if (index <= noteString1.length + noteString2.length){
                    setTimeout(notePrint(index, noteString2), 100);
                }else  if (index <= noteString1.length + noteString2.length + noteString3.length){
                    setTimeout(notePrint(index, noteString3), 100);
                }else if (index <= noteString1.length + noteString2.length + noteString3.length + noteString4.length){
                    setTimeout(notePrint(index, noteString4), 100);
                }
            }
        }

    }, 4000);
    var timedBlink = setInterval(function () {
        clearInterval(timedBlink);
        notep.getElementsByTagName("span")[0].style.display = "none";
    }, 7800);

}
