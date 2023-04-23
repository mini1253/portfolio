// 로딩페이지
// 로딩이 완료되면 로딩 이미지를 사라지게 하는 함수
function hideLoadingImage() {
  var loadingImage = document.getElementById("loadingImage");
  loadingImage.style.display = "none";
}
// 로딩 완료 이벤트를 감지하여 hideLoadingImage() 함수 호출
window.addEventListener("load", function() {
  hideLoadingImage();
});
 



// 메뉴 아래 밑줄 애니메이션
let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav a");

horizontalMenus.forEach(menu => menu.addEventListener("mouseover", (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px"; // 수정된 부분
}; 




// 스크롤 내리면 tooltip이 사라지게
$(".btn_tooltip").hide();
$(window).scroll(function () {
  //html의 scrollTop을 계산해서 변수 scTop에 저장
  let scTop = $("html").scrollTop(); 
  if (scTop < 50) {
    $(".btn_tooltip").fadeIn(500);
  } else {
    $(".btn_tooltip").fadeOut(500);
  }
});




//clone coding 슬라이드
$(".clone").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});




// Top 버튼
$('.scroll_top').hide();
$(window).scroll(function () {
  let scTop = $('html').scrollTop(); //html의 scrollTop을 계산해서 변수 scTop에 저장
  if (scTop > 50) {
    $('.scroll_top').fadeIn(500);
  } else {
    $('.scroll_top').fadeOut(500);
  }
});


// 스크롤을 맨 위로 올려주는 코드
$('.scroll_top').click(function () { 
  $('html').animate({ scrollTop: 0 }, 500);
});
