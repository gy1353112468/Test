window.onload = function () {
    var mode = document.getElementsByClassName("header-left-btn");
    var ModeContent = document.getElementsByClassName("header-left-btn-content");
    var Mark = document.getElementsByClassName("mark");
    var H1Img = document.getElementsByClassName("h1-img");
    var ImgContent = imgcontent.getElementsByTagName("img");
    var IconContent =  iconcontent.getElementsByTagName("img");
    var IconContentLeft = document.getElementById("iconcontent");
    var IconContentOffLeft = IconContentLeft.offsetLeft;
    var ImgNum = new Array(IconContent.length);
    var HomeFixed = document.getElementsByClassName("home");
    var TopFixed = document.getElementsByClassName("top");
    var Close = document.getElementsByClassName("close");
    var FixedAd = document.getElementsByClassName("fixed-ad");
    var BodyScroll = document.documentElement.scrollTop;
    var Share =  document.getElementsByClassName("share");
    var GotoIndex = document.getElementsByClassName("goto_index");
    var MainRightBdRight = document.getElementById("mainrightbdright");
    var MainRightBdRightOffsetleft = MainRightBdRight.offsetLeft;
    var LeftOrderNum0 = document.getElementById("leftordernum0");
    var JrrdContentLi = jrrdcontent.getElementsByTagName("li");
    var JrrdContentH3 = jrrdcontent.getElementsByTagName("h3");
    var SelVid = document.getElementById("selvid");
    var SelImg = document.getElementById("selimg");
    console.log(LeftOrderNum0.offsetTop);
    var x = 0;
    for (var i =0; i < JrrdContentLi.length; i++){
        JrrdContentLi[i].index = i;
        JrrdContentLi[i].onmouseover = function () {
            JrrdContentH3[this.index].style.color = "red";
        }
        JrrdContentLi[i].onmouseout = function () {
            JrrdContentH3[this.index].style.cssText = "";
        }
    }
    for (var i = 0; i < ImgContent.length; i++){
        ImgContent[i].index = i;
        ImgNum[i] = ImgContent[i].index;
    }
    function ChangeImg(_ImgIndex){
        for (var i =0; i < ImgContent.length; i++){
            ImgContent[i].style.display = "none";
            IconContent[i].style.border = "none";
        }
        ImgContent[_ImgIndex].style.display = "block";
        IconContent[_ImgIndex].style.border = "1px solid orange";
        if (IconContent[_ImgIndex].offsetLeft > 286 && IconContent[_ImgIndex].offsetLeft < 327 && IconContentLeft.offsetLeft == 0){
            IconContentOffLeft = IconContentLeft.offsetLeft;
            IconContentLeft.style.left = IconContentOffLeft - 22 + "px";
        }else if (IconContent[_ImgIndex].offsetLeft > 327 && IconContentLeft.offsetLeft !== -41) {
            IconContentOffLeft = IconContentLeft.offsetLeft;
            IconContentLeft.style.left = IconContentOffLeft - 41 + "px";
        }else if (IconContent[_ImgIndex].offsetLeft < 1){
            IconContentLeft.style.left = "0px";
        }else if(IconContent[_ImgIndex].offsetLeft == 328 && IconContentLeft.offsetLeft == -41) {
            IconContentOffLeft = IconContentLeft.offsetLeft;
            IconContentLeft.style.left = IconContentOffLeft - 22 + "px";
        }
    }
    for (var i = 0; i < IconContent.length; i++){
        IconContent[i].index = i;
        ImgContent[i].index = i;
        IconContent[ImgNum[i]].onmouseover = function (){
            clearInterval(Timed);
            if (IconContent[this.index].offsetLeft == 287 && IconContentLeft.offsetLeft == 0) {
                IconContentOffLeft = IconContentLeft.offsetLeft;
                IconContentLeft.style.left = IconContentOffLeft - 22 + "px";
                ChangeImg(this.index)
            }
            if(IconContent[this.index].offsetLeft == 41 && IconContentLeft.offsetLeft == -63){
                IconContentOffLeft = IconContentLeft.offsetLeft;
                IconContentLeft.style.left = IconContentOffLeft + 22 + "px";
                ChangeImg(this.index)
            }
            if(IconContent[this.index].offsetLeft == 328){
                for (var i =0; i < ImgContent.length; i++){
                    ImgContent[i].style.display = "none";
                    IconContent[i].style.border = "none";
                }
                ImgContent[this.index].style.display = "block";
                IconContent[this.index].style.border = "1px solid orange";
                return 0;
            }
            if(IconContent[this.index].offsetLeft == 328 && IconContentLeft.offsetLeft == -41){
                IconContentOffLeft = IconContentLeft.offsetLeft;
                IconContentLeft.style.left = IconContentOffLeft - 22 + "px";
                ChangeImg(this.index)
            }
            ChangeImg(this.index)
        }
        IconContent[ImgNum[i]].onmouseout = function () {
            x = this.index;
            Timed = setInterval(StartPlay, 1000);
        }
        ImgContent[ImgNum[i]].onmouseover = function () {
            clearInterval(Timed);
            ImgContent[this.index].style.opacity = "0.5"
        }
        ImgContent[ImgNum[i]].onmouseout = function () {
            ImgContent[this.index].style.cssText = "";
            Timed = setInterval(StartPlay, 1000)
        }
    }
    Timed = setInterval(StartPlay, 1000);
    function StartPlay(){
        if (x < ImgContent.length-1){
            x = x+1;
        }else{
            x = 0;
        }
        ChangeImg(x);
    }
    function MoveTop (){
        BodyScroll = document.documentElement.scrollTop;
        if (BodyScroll !==0){
            document.documentElement.scrollTo(0,0);
        }
    }
    mode[0].onmouseover = function () {
        ModeContent[0].style.display = "block";
    }
    mode[0].onmouseout = function () {
        ModeContent[0].style.cssText = "";
    }
    H1Img[0].onmouseover = function () {
        Mark[0].style.animation = "ad_mark 0.2s forwards";
    }
    H1Img[0].onmouseout = function () {
        Mark[0].style.animation = "ad_mark2 0.2s forwards";
    }
    HomeFixed[0].onmouseover = function () {
        HomeFixed[0].style.animation = "Go 0.3s forwards"
    }
    HomeFixed[0].onmouseout = function () {
        HomeFixed[0].style.animation = "Back 0.3s forwards"
    }
    TopFixed[0].onmouseover = function () {
        TopFixed[0].style.animation = "Go 0.3s forwards"
    }
    TopFixed[0].onmouseout = function () {
        TopFixed[0].style.animation = "Back 0.3s forwards"
    }
    TopFixed[0].onclick = function () {
        MoveTop();
    }
    Close[0].onclick = function () {
        FixedAd[0].style.display = "none";
    }
    SelVid.onmouseover = function () {
        SelVid.style.backgroundColor = "red";
        SelImg.style.cssText = "";
        document.getElementById("sel_vid").style.display = "block";
        document.getElementById("sel_img").style.display = "none";
    }
    SelImg.onmouseover = function () {
        SelImg.style.backgroundColor = "red";
        SelVid.style.backgroundColor = "#f8f8f8";
        document.getElementById("sel_img").style.display = "block";
        document.getElementById("sel_vid").style.display = "none";
    }
    document.body.onscroll = function () {
        if (document.documentElement.scrollTop >  1000){
            Share[0].style.display = "none";
            GotoIndex[0].style.display = "block";
        }
        if(document.documentElement.scrollTop <=1000){
            Share[0].style.display = "block";
            GotoIndex[0].style.display = "none";
        }
        if(document.documentElement.scrollTop >= 1499){
            MainRightBdRight.style.position = "fixed";
            MainRightBdRight.style.top = "48px";
            MainRightBdRight.style.left = MainRightBdRightOffsetleft + "px";
        }
        if(document.documentElement.scrollTop <1499){
            MainRightBdRight.style.cssText = "";
        }
        if(document.documentElement.scrollTop >= 4036){
            LeftOrderNum0.style.position = "fixed";
            LeftOrderNum0.style.top ="48px";
            LeftOrderNum0.style.left = LeftOrderNum0.offsetLeft +"px"
        }
        if(document.documentElement.scrollTop < 4036){
            LeftOrderNum0.style.cssText = "";
        }
    }
}