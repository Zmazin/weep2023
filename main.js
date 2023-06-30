"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});


/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});


const navLinks = document.querySelectorAll(".l_header-nav_link");

navLinks.forEach(navLink => {

    navLink.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
    });
});

/*---------- カルーセルパネル ----------*/

const swiper = new Swiper(".js_member-swiper", {
  loop: true, pagination: {
    el:".swiper-pagination", clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBeteen: 20, breakpoints: {
    880: { slidesPerView: 2,}, 1088: { slidesPerView: 3,},
  },
});

const swiper2 = new Swiper(".js_movie-swiper", {
  loop: true, pagination: {
    el:".swiper2-pagination", clickable: true,
  },
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  spaceBeteen: 20, breakpoints: {
    880: { slidesPerView: 2,},
  },
});
