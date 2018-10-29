var Img = $('.container-fluid img');
var winHeight = $(window).height();
var winWidth = $(window).width();
var sampleImg = $('.bg-container');

//导航栏跳转
function GoTo(element){
    $('html,body').animate({scrollTop: $(element).offset().top + 'px'}, 500);
}

$(document).ready(function () {
    var index = 0;
    var circleProgress = $('#circleProgress').width();
    console.log(circleProgress);
    var y = 0;
    var x = 0;
    Img.each(function () {
        $(this).css({'height': winHeight + 'px', 'width': winWidth + 'px'})
    });
    $('.container-fluid').css('height', winHeight + 'px');

    //背景图片轮播
    var Timed = setInterval(changeImg, 7000);
    function changeImg(){
        Img.removeClass('bg');
        if (index == -1){
            $(Img[Img.length - 1]).animate({opacity: '0'}, 2000);
            $(Img[index + 1]).animate({opacity: '1'}, 2000);
            Img.addClass('bg');
            index += 1;
        } else if (index >= 0){
            $(Img[index]).animate({opacity: '0'}, 2000);
            $(Img[index + 1]).animate({opacity: '1'}, 2000);
            Img.addClass('bg');
            index += 1;
            if (index + 1 >= Img.length){
                index = -1;
            }
        }
    }

    //首页导航跳转
    $('#aboutme').click(function () {
        GoTo('#_nav');
    });
    $('#sample').click(function () {
        GoTo('#samplereel')
    });

    //滚轮事件
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        var sampleReet = $('#samplereel').offset().top;
        var skillHeight = $('#_skill').offset().top;

        //导航条固定  指定位置向下滚动时固定 向上滚动时还原
        if (scrollHeight > winHeight){
            $('header .navbar-default').addClass('navbar-fixed-top');
            $('main').css('padding-top', '50px');
            $('.topfixed').css('display', 'block');
        }else if (scrollHeight <= winHeight){
            $('header .navbar-default').removeClass('navbar-fixed-top');
            $('main').css('padding-top', '0px');
            $('.topfixed').css('display', 'none');
        }

        //作品集动画
        if (scrollHeight >= sampleReet) {
            for (var i = 0; i < sampleImg.length; i++) {
                    $(sampleImg[i]).animate({opacity: '1'}, 1000);
            }
        }

        // 环形进度条动画
        if (scrollHeight >= skillHeight - 1) {
            if (y == 0 || x == 0){
                progress80();
                progress75();
            }
            function progress80(){
                y += 1;
                if (y <= 80){
                    if (y >= 10){
                        $('.numnber').css('left', $('.circle-wrapper').width() / 2 - $('.numnber').width() / 2 + 'px');
                    }
                    $('.numnber')[0].innerHTML = y;
                    $('.numnber')[1].innerHTML = y;
                }
                setTimeout(progress80, 3000/80);
            }
            function progress75(){
                x += 1;
                if (x <= 75){
                    if (x >= 10){
                        $('.numnber').css('left', $('.circle-wrapper').width() / 2 - $('.numnber').width() / 2 + 'px');
                    }
                    $('.numnber')[2].innerHTML = x;
                    $('.numnber')[3].innerHTML = x;
                }
                setTimeout(progress75, 3000/75);
            }
            var wrapperRight = $('.wrapper-right');
            var wrapperLeft = $('.wrapper-left');
            console.log(wrapperLeft[0]);
            console.log(wrapperLeft.length)
            wrapperRight.each(function () {
                wrapperRight.css('animation', 'jqrotate1 2s forwards linear');
            })
            var filterLeft = wrapperLeft.filter(function (index) {
                return (index >= 2);
            })
            console.log(wrapperLeft)
            console.log(filterLeft);
            setTimeout(function () {
                $(wrapperLeft[0]).css('animation', 'jqrotate3 1s forwards linear');
                $(wrapperLeft[1]).css('animation', 'jqrotate3 1s forwards linear');
                filterLeft.each(function () {
                    $(this).css('animation', 'jqrotate2 1s forwards linear');
                })
            }, 2000);
        }
    });
    //首页标题动画
    $('#abm_sap').animate({
        top:'25%',
        opacity:'1'
    }, "slow");
    Img.addClass('bg');
    //环形进度条-响应
    circleProgress = circleProgress * 0.8;
    $('.circle-wrapper').css('height', circleProgress + 'px');
    $('.numnber').css('top', $('.circle-wrapper').height() / 2 - $('.numnber').height() / 2 + 'px');
    $('.numnber').css('left', $('.circle-wrapper').width() / 2 - $('.numnber').width() / 2 + 'px');
    $('.wrapper-left').css('border-radius', circleProgress/2 + 'px' + ' ' + '0' + ' ' + '0' + ' ' + circleProgress/2 + 'px');
    $('.wrapper-right').css('border-radius', '0' + ' ' + circleProgress/2 + 'px' + ' ' + circleProgress/2 + 'px' + ' ' + '0');
});

$(window).resize(function () {
    winHeight = $(window).height();
    winWidth = $(window).width();
    var circleProgress = $('#circleProgress').width();
    Img.each(function () {
        $(this).css({'height': winHeight + 'px', 'width': winWidth + 'px'})
    });
    $('.container-fluid').css('height', winHeight + 'px');
    circleProgress = circleProgress * 0.8;
    $('.circle-wrapper').css('height', circleProgress + 'px');
    $('.numnber').css('top', $('.circle-wrapper').height() / 2 - $('.numnber').height() / 2 + 'px');
    $('.numnber').css('left', $('.circle-wrapper').width() / 2 - $('.numnber').width() / 2 + 'px');
    $('.wrapper-left').css('border-radius', circleProgress/2 + 'px' + ' ' + '0' + ' ' + '0' + ' ' + circleProgress/2 + 'px');
    $('.wrapper-right').css('border-radius', '0' + ' ' + circleProgress/2 + 'px' + ' ' + circleProgress/2 + 'px' + ' ' + '0');
});