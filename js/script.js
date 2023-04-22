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
// 스크롤 이벤트를 감지하여 btn_tooltip 요소 숨기는 함수 호출
var prevScrollPos = window.pageYOffset; // 이전 스크롤 위치 저장

// 스크롤 이벤트를 감지하여 btn_tooltip 요소를 표시/숨김
window.addEventListener("scroll", function() {
  var tooltip = document.querySelector(".btn_tooltip");
  var qr = document.querySelector(".qr");
  var currentScrollPos = window.pageYOffset; // 현재 스크롤 위치
  // 현재 스크롤 위치와 이전 스크롤 위치를 비교하여 스크롤 방향 판단
  if (prevScrollPos > currentScrollPos) {
    // 스크롤이 올라갈 때 btn_tooltip 요소를 표시
    tooltip.style.display = "block";
  } else {
    // 스크롤이 내려갈 때 qr 요소가 100vh 아래로 내려갔을 때 btn_tooltip 요소를 숨김
    if (currentScrollPos > (qr.offsetTop + qr.offsetHeight - window.innerHeight)) {
      tooltip.style.display = "none";
    }
  }
  prevScrollPos = currentScrollPos; // 이전 스크롤 위치 업데이트
});





//clone coding 슬라이드
$(".clone").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});






//top 버튼