$(document).ready(function () {
    var Img = $('.container-fluid img');
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var scrollHeight = $(window).scrollTop();
    var index = 0;
    console.log(Img[0].height);
    Img.each(function () {
        $(this).css({'height': winHeight + 'px', 'width': winWidth + 'px'})
    });
    $('.container-fluid').css('height', winHeight + 'px');
    var Timed = setInterval(changeImg, 4000);
    function changeImg(){
        $(Img[index]).animate({opacity: '0'}, 2000);
        $(Img[index + 1]).animate({opacity: '1'}, 2000);
        Img.addClass('bg');
        if (index >= 3){
            index
        }
        index += 1;
    }
    $('#aboutme').click(function () {
        $('html,body').animate({scrollTop: winHeight + 'px'}, 500);
    });
    $(window).scroll(function () {
        scrollHeight = $(window).scrollTop();
        if (scrollHeight > winHeight){
            $('header .navbar-default').addClass('navbar-fixed-top');
            $('main').css('padding-top', '50px');
        }else if (scrollHeight <= winHeight){
            $('header .navbar-default').removeClass('navbar-fixed-top');
            $('main').css('padding-top', '0px');
        }
    });
    $('#abm_sap').animate({
        top:'25%',
        opacity:'1'
    }, "slow");
    Img.addClass('bg');
});
$(window).resize(function () {
    $('.container-fluid').css('height', $('.container-fluid img').height() + 'px');
});