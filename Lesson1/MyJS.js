window.onload = function(){
    var Button = document.getElementsByClassName("top-container-button")[0];
    var AilContent = document.getElementsByClassName("ail-conainer")[0];
    var NavList = navbutton.getElementsByTagName("a");
    var NavContent =  document.getElementsByClassName("header-bottom-conainer");
    var Img = focusmapcontainer.getElementsByTagName("img");
    var ImgContent = document.getElementsByClassName("focus-map-container");
    var NavBtn = document.getElementsByClassName("img-navbtn");
    var PrevBtn =  document.getElementById("prevbtn");
    var NextBtn = document.getElementById("nextbtn");
    var ScreenWidth = window.screen.width;
    var Prev = document.getElementsByClassName("focus-map-container")[0].offsetLeft;
    var Next = document.getElementsByClassName("focus-map-container")[0].offsetLeft - ScreenWidth;
    console.log(Prev);
    console.log(Next);
    console.log(ScreenWidth);
    console.log(Img.length);
    ImgContent[0].style.width = (ScreenWidth * Img.length) + "px";
    ImgContent[0].style.left = -ScreenWidth + "px";
    ImgContent[0].onmouseover = function () {
        NavBtn[0].style.display = "block";
    }
    NavBtn[0].onmouseover = function(){
        NavBtn[0].style.display = "block";
    }
    ImgContent[0].onmouseout = function () {
        NavBtn[0].style.cssText = "";
    }
    NavBtn[0].onmouseout = function(){
        NavBtn[0].style.cssText = "";
    }
    for (var i = 0; i < Img.length; i++){
        Img[i].style.maxWidth = window.screen.width + "px";
    }
    var Timed = setInterval(ChangeImg, 4000);
    PrevBtn.onclick = function(){
        clearInterval(Timed);
        PrevBtnOnclick();
        Timed = setInterval(ChangeImg, 4000);
    }
    NextBtn.onclick = function () {
        clearInterval(Timed);
        ChangeImg();
        Timed = setInterval(ChangeImg, 4000);
    }
    function ChangeImg() {
         Prev = document.getElementsByClassName("focus-map-container")[0].offsetLeft;
         Next = document.getElementsByClassName("focus-map-container")[0].offsetLeft - ScreenWidth;
        //setTimeout(Reset, 2000);
        Reset();
        MoveNextImg();
    }
    function PrevBtnOnclick() {
        Prev = document.getElementsByClassName("focus-map-container")[0].offsetLeft;
        Next = document.getElementsByClassName("focus-map-container")[0].offsetLeft + ScreenWidth;
        Reset();
        MovePrevImg();

    }
    function Reset() {
        if (parseInt(Next) == ScreenWidth * (-Img.length)) {
            ImgContent[0].style.left = -ScreenWidth + "px";
            Prev = -ScreenWidth;
            Next = -ScreenWidth * 2;
        }
        if(parseInt(Next) == ScreenWidth){
            ImgContent[0].style.left = ScreenWidth * (-Img.length + 2) + "px";
            Prev = ScreenWidth * (-Img.length + 2);
            Next = ScreenWidth * (-Img.length + 3);
        }
    }
    function MoveNextImg() {
        if (Prev > (Next + 1)) {
            ImgContent[0].style.left = (Prev - ScreenWidth / 5) + "px";
            Prev -= ScreenWidth / 5;
            setTimeout(MoveNextImg, 50);
        }
    }
    function MovePrevImg(){
        if(Prev < (Next - 1)) {
            ImgContent[0].style.left = (Prev + ScreenWidth / 5) + "px";
            Prev += ScreenWidth / 5;
            setTimeout(MovePrevImg, 50);
        }
    }

    Button.onmouseover = function () {
        Button.style.backgroundColor = "white";
        Button.style.borderLeft = "1px solid #dddddd";
        Button.style.borderRight = "1px solid #dddddd";
        Button.style.borderBottom = "5px solid white";
        AilContent.style.display = "block";
    }
    AilContent.onmouseover = function(){
        Button.style.backgroundColor = "white";
        Button.style.borderLeft = "1px solid #dddddd";
        Button.style.borderRight = "1px solid #dddddd";
        Button.style.borderBottom = "5px solid white";
        AilContent.style.display = "block";
    }
    Button.onmouseout = function () {
        Button.style.cssText = "";
        AilContent.style.cssText = "";
    }
    AilContent.onmouseout = function(){
        Button.style.cssText = "";
        AilContent.style.cssText = "";
    }
    for(var i = 1; i < NavList.length; i++) {
        NavList[i].index = i;
        NavList[i].onmouseover = function () {
            NavList[this.index].style.color = "#bc2826";
            NavContent[this.index-1].style.display = "block";
        }
        NavList[i].onmouseout = function () {
            NavList[this.index].style.cssText = "";
            NavContent[this.index-1].style.cssText = "";
        }
    }
}
