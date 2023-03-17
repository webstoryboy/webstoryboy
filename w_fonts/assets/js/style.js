// 탭 메뉴
var tabBtn = $(".webFont__use__menu li");
var tabCont = $(".webFont__use__cont > div");
tabCont.hide().eq(0).show();
tabBtn.click(function(e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
});

// 웹 폰트 / 컬러
$(".webFont__feel h2 span").click(function () {
    var target = $(this);
    $(".webFont__feel h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__feel__view strong, .webFont__feel__view em").css("font-weight", weight);
});
$(".webFont__feel__color button").click(function(){
    var target = $(this).attr("class");
    $(".webFont__feel__view > div").removeClass();
    $(".webFont__feel__view > div").addClass(target)
});

// 웹 폰트 / 컬러
$(".webFont__image h2 span").click(function () {
    var target = $(this);
    $(".webFont__image h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__image__font strong, .webFont__image__font em").css("font-weight", weight);
});
$(".webFont__image__view button").click(function(){
    var target = $(this).attr("class");
    $(".webFont__image__font > div").removeClass();
    $(".webFont__image__font > div").addClass(target)
});

// 웹 폰트 / 애니메이션
$(".webFont__animation__btn button").click(function(){
    var target = $(this).attr("class");
    $(".webFont__animation__view > div").removeClass();
    $(".webFont__animation__view > div").addClass(target)
});

// 웹 폰트 / 코드
$(".webFont__code h2 span").click(function () {
    var target = $(this);
    $(".webFont__code h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__code__view").css("font-weight", weight);
});
$(".webFont__code__btn button").click(function(){
    var target = $(this).attr("class");
    $(".webFont__code__view > div").removeClass();
    $(".webFont__code__view > div").addClass(target)
});

// 웹 폰트 / 두께
$("#webFont__weight__input").on("change keyup state", function (e) {
    $(".webFont__weight__preview li").each(function(){
        if ($("#webFont__weight__input").val() === '') {
            $(this).text("글씨를 입력하면 변경됩니다.");
        } else {
            $(this).text($("#webFont__weight__input").val());
        }
    });
});

// 웹 폰트 / 사이즈
$(".webFont__size h2 span").click(function () {
    var target = $(this);
    $(".webFont__size h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__size__preview").css("font-weight", weight);
});
$("#webFont__size__input").on("change keyup state", function (e) {
    $(".webFont__size__preview li").each(function () {
        if ($("#webFont__size__input").val() === '') {
            $(this).text("글씨를 입력하면 변경됩니다.");
        } else {
            $(this).text($("#webFont__size__input").val());
        }
    });
});

// 웹 폰트 / 레이아웃
$(".webFont__layout h2 span").click(function () {
    var target = $(this);
    $(".webFont__layout h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__layout__view").css("font-weight", weight);
});
$("#webFont__layout__input").on("change keyup state", function (e) {
    $(".webFont__layout__view div").each(function () {
        if ($("#webFont__layout__input").val() === '') {
            $(this).text("글씨를 입력하면 변경됩니다.");
        } else {
            $(this).text($("#webFont__layout__input").val());
        }
    });
});

// 웹 폰트 / 자간
$(".webFont__letter h2 span").click(function () {
    var target = $(this);
    $(".webFont__letter h2 span").removeClass("active");
    target.addClass("active");
    let weight = $(this).text();
    $(".webFont__letter__view").css("font-weight", weight);
});

// 01
let rangeInput = document.querySelector(".range-input input");
let rangeValue = document.querySelector(".range-input .value div");

let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);

for(let i=start;i<=end;i+=step){
    rangeValue.innerHTML += '<div>'+i+'</div>';
}

rangeInput.addEventListener("input",function(){
    let top = parseFloat(rangeInput.value)/step * -40;
    rangeValue.style.marginTop = top+"px";
    let size = this.value;
    document.querySelector(".webFont__letter__view div").style.letterSpacing = `${size}px`
});

// 02
let rangeInput2 = document.querySelector(".range-input2 input");
let rangeValue2 = document.querySelector(".range-input2 .value div");

let start2 = parseFloat(rangeInput2.min);
let end2 = parseFloat(rangeInput2.max);
let step2 = parseFloat(rangeInput2.step);

// 10 150
for(let i=start2; i<=end2; i+=step){
    rangeValue2.innerHTML += '<div>'+i+'</div>';
}
rangeValue2.style.marginTop = "-6000px";
rangeInput2.addEventListener("input",function(){

    let top = parseFloat(rangeInput2.value)/step * -40;
    rangeValue2.style.marginTop = top+"px";
    let size = this.value;
    document.querySelector(".webFont__letter__view div").style.fontSize = `${size}px`
});