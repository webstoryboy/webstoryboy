function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initHeader() {
    if (isMobile()) {
        $(".header_inner .header_title .logo_n a").attr("href", "https://m.naver.com");
    } else {
        $(".header_inner .header_title .logo_n a").attr("href", "https://www.naver.com");
    }

    // header에 .service, .link_shortcut의 텍스트, 링크 변경
    var wrap = document.querySelector("#wrap");
    var service = document.querySelector(".service a");
    var shortcut = document.querySelector(".link_shortcut");

    if ($(wrap).hasClass("point_wrap")) {
        $(service).text("네이버페이 포인트 적립").attr("href","/naverdetails/point");
        $(shortcut).text("내 포인트 확인하기").attr("href","https://order.pay.naver.com/home");
    } else if ($(wrap).hasClass("certificate_wrap")) {
        $(service).text("네이버 인증서").attr("href","/naverdetails/certificate");
        $(shortcut).text("인증서 바로가기").attr("href","https://ekyc.naver.com/home/main");
    } else if ($(wrap).hasClass("mart_wrap")) {
        $(service).text("네이버 장보기").attr("href","/naverdetails/mart");
        $(shortcut).text("장보기 바로가기").attr("href","https://shopping.naver.com/market/home")
    } else if ($(wrap).hasClass("app_wrap")) {
        $(service).text("네이버앱").attr("href","/naverdetails/app");
        $(shortcut).text("Na 바로가기").attr("href","http://naver.me/F6JDPx7C");
    } else if ($(wrap).hasClass("opentalk_wrap")) {
        $(service).text("네이버 오픈톡").attr("href","/naverdetails/opentalk");
        $(shortcut).text("스포츠 오픈톡 바로가기").attr("href","https://m.sports.naver.com/community/index");
    } else if ($(wrap).hasClass("guaranteed_delivery_wrap")) {
        $(service).text("네이버도착보장").attr("href","/naverdetails/logistics");
        $(shortcut).text("네이버도착보장 바로가기").attr("href","https://shopping.naver.com/logistics/home");
    } else if ($(wrap).hasClass("rental_wrap")) {
        $(service).text("네이버쇼핑 렌탈").attr("href","/naverdetails/rental");
        $(shortcut).text("네이버쇼핑 렌탈 바로가기").attr("href","https://m.shopping.naver.com/plan/details/652328");
    } else if ($(wrap).hasClass("digitalslip_wrap")) {
        $(service).text("카드 영수증 알림").attr("href","/naverdetails/digitalslip");
        $(shortcut).text("카드 영수증 알림 신청하기").attr("href","https://ua.talk.naver.com/web/card/register");

        $(shortcut).click(function (e) {
            if (!isMobile()) {
                e.preventDefault();
                $('#noti_popup').show();
            }
        })
    } else if ($(wrap).hasClass("golf_wrap")) {
        $(service).text("네이버 스포츠 MY골프").attr("href","/naverdetails/mygolf");
        $(shortcut).text("네이버 스포츠 MY골프").attr("href","https://m.sports.naver.com/play/golf/my");
    } else if ($(wrap).hasClass("newpc_wrap")) {
        $(service).text("새로운 PC 메인").attr("href","/naverdetails/newpc");
        $(shortcut).text("PC 메인 바로가기").attr("href","https://naver.com");
    }

    // header에 .scroll 추가
    var header = document.querySelector('#header');

    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }

    window.addEventListener('scroll', function() {
        var scrollpos = window.scrollY || window.pageYOffset;

        if (scrollpos > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    // header gnb 버튼 클릭시 .open 추가
    var body = document.querySelector('body');
    var gnb = document.querySelector('.gnb');
    var btnGnb = document.querySelector('.btn_gnb');
    var btnGnbClose = document.querySelector('.btn_close');

    var layerOpen = function() {
        gnb.classList.add('open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

    var layerClose = function() {
        gnb.classList.remove('open');
        document.getElementsByTagName('body')[0].style.overflow = 'initial';
    }

    btnGnb.addEventListener("click", layerOpen);
    btnGnbClose.addEventListener("click", layerClose);
}

function initFooter() {
    if (isMobile()) {
        $(".footer_inner .logo_naver").attr("href", "https://m.naver.com");
    } else {
        $(".footer_inner .logo_naver").attr("href", "https://www.naver.com");
    }
}

$(document).ready(function () {
    initHeader();
    initFooter();
});