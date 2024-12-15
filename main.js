const myMobileMenu = document.getElementById("my-mobile-header"); 

function openMobileMenu() {
    myMobileMenu.classList.add("open");
}

function closeMobileMenu() {
    myMobileMenu.classList.remove("open")
}

// window.onload = function() {
//     // 3초 후에 #delayed-element 요소에 .visible 클래스를 추가
//     setTimeout(function() {
//       document.getElementById("delayed-element").classList.remove("hidden");
//       document.getElementById("delayed-element").classList.add("visible");
//     }, 1000);  // 3000ms = 3초
//   };