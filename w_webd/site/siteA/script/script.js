$(function(){
    // 메뉴 : 하나씩 나오기
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    //슬라이드 : 페이드 효과
    let currentIndex = 0;
    const $slider = $(".slider");
    $slider.hide().first().show();  //모든 이미지 숨기고 첫번째 이미지 나타남

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % $slider.length;

        $slider.eq(currentIndex).fadeOut(1200);
        $slider.eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000)

    // 탭 메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.on("click", function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});