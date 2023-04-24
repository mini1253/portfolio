//로딩 애니메이션 
const loadingImage = document.getElementById('loadingImage'); 
loadingImage.style.animationPlayState = 'running'; 
window.addEventListener('load', () => { 
  setTimeout(() => {
    loadingImage.style.display = 'none';
  }, 5000);
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
var prevScrollPos = window.pageYOffset; // 이전 스크롤 위치 저장
 
window.addEventListener("scroll", function() {
  var tooltip = document.querySelector(".btn_tooltip");
  var qr = document.querySelector(".qr");
  var currentScrollPos = window.pageYOffset; // 현재 스크롤 위치
  if (prevScrollPos > currentScrollPos) { 
    tooltip.style.display = "block";
  } else {
    if (currentScrollPos > (qr.offsetTop + qr.offsetHeight - window.innerHeight)) {
      tooltip.style.display = "none";
    }
  }
  prevScrollPos = currentScrollPos; // 이전 스크롤 위치 업데이트
});