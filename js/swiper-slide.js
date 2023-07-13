var swiper = new Swiper(".sect02-slide", {
  slidesPerView: 3,
  spaceBetween: 95,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
  // slidesOffsetBefore: 50,
  // slidesOffsetAfter: 50,
  // centeredSlides: true,
});

var swiper2 = new Swiper(".sect03-slide", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // mousewheel: true,
  // loop: true,
});

var swiper3 = new Swiper(".sect04 .sect04-slide", {
  loop: true,
  loopAdditionalSlides: 1,
  effect: "fade",
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // centeredSlides: true,
  observer: true,
  observeParents: true,
});

var swiper4 = new Swiper(".sect05-slide", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
  // loop: true,
});

$(".icon_search").click(function () {
  if ($("header .search_text input.active").hasClass("active") == true) {
    $("header .search_text input.active").removeClass("active");
  } else {
    $("header .search_text input").addClass("active");
  }
});

var swiper5 = new Swiper(".sect01-slide", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});
