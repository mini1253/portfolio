// 메뉴 아래 밑줄 애니메이션
let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("ul.mymenu a");

horizontalMenus.forEach(menu => menu.addEventListener("mouseover", (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}; 
//디자인 슬라이드 
let swiper1 = new Swiper(".mySwiper1", {
    pagination: {
        el: ".swiper-pagination-1",
        type: "fraction",
    },
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    loop: false, // 슬라이드 반복 여부
    autoplay: {
        delay: 2500, // 시간 설정
        disableOnInteraction: false, // 스와이프 후 자동 재생
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
});
//디자인 슬라이드 1
let swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination-2",
        type: "fraction",
    },
    spaceBetween: 30,
    slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
    loop: false,
    autoplay: {
        delay: 2500, // 시간 설정
        disableOnInteraction: false, // 스와이프 후 자동 재생
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});

//햄버거 메뉴
$(function(){
    $('.mobile_menu').click(function(){
        $('.mobile_bg').toggle();
    })
})

$(function(){
    $('.infoC').click(function(){
        $('.information').toggle();
    })
})