// swiper
$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距

        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
// menu click
(() => {
    $("header .mid .center .menu li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})();

// hover
$(function () {
    var click;
    var num;
    var max;
    $("header .mid .center .menu li").hover(function () {

        var i = $(this).index();

        if (i != 0 && i != 1 && i != 8) {
            $("header .bottom").toggleClass("display");
            $("header .bottom .list ul:eq(" + (i - 2) + ")").addClass("display");
            $("header .bottom .list ul:eq(" + (i - 2) + ")").siblings().removeClass("display");
        }
        // 原點
        click = 0;
        $("header .bottom .list ul ol").css("transform", "translateX(" + 0 + " px)");
        // 左邊箭頭不能點
        $("header .bottom .list .arrow_ic.prev").removeClass("active");

        // li有幾個img
        num = $("header .bottom .list ul.display ol li").length;

        // 最大留 6 個img
        max = num - 5;
        if (num > 6) {
            $("header .bottom .list .arrow_ic.next").addClass("active");
        } else {
            $("header .bottom .list .arrow_ic.next").removeClass("active");
        }
    })
    // next click 
    $("header .bottom .list .arrow_ic.next").click(function () {
        $("header .bottom .list .arrow_ic.prev").addClass("active");
        click++;
        $("header .bottom .list ul.display ol").css("transform", "translateX(" + click * -220 + "px)");
        if (click == max) {
            $("header .bottom .list .arrow_ic.next").removeClass("active");
        }
    })
    // prev click 
    $("header .bottom .list .arrow_ic.prev").click(function () {
        $("header .bottom .list .arrow_ic.next").addClass("active");
        click--;
        $("header .bottom .list ul.display ol").css("transform", "translateX(" + click * -220 + "px)");
        if (click == 0) {
            $("header .bottom .list .arrow_ic.prev").removeClass("active");
        }
    })
    // keep on
    $("header .bottom").hover(function () {
        $(this).toggleClass("display");
    })
});
// footer
$(function () {
    $("footer .upperHalf .upperHalfCenter ul li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
});

const langFn = function () {

    const langFace = document.querySelector("header .top .center .userList .lang");
    let click = 0;

    langFace.addEventListener("click", function () {
        click++;
        click % 2 == 1 ? langFace.classList.add("display") : langFace.classList.remove("display");
    });

    const lis = document.querySelectorAll("header .top .center .userList .lang > ul li")
    let p = document.querySelector("header .top .center .userList .lang > p")

    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", (e) => {
            let el = e.target;
            p.innerHTML = el.innerHTML;
        });
    }
};langFn();