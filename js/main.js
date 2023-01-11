"use strict";


// badges 페이지 스크롤에 따른 요소 제어
const badgeEL = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

// 변수 badgeEL 어떤값은 header .badges 라는 요소를 찾아주는것

// window.addEventListener('scroll', function () {
//   console.log('scroll!');
// });
// window 우리가 보고있는 화면 자체에 scroll event를 추가해서
// 그 화면이 스크롤되면 뒤쪽에 있는 익멱의 함수를 실행시키겠다
// 개발자도구 가서 보면 스크롤이 많이 적용되기때문에 외부에서 자바스크립트 라이브러리를 사용해서 줄여줌
// google검색 lodash https://cdnjs.com/libraries/lodash.js 적용하고 아래처럼 바꿔주기

window.addEventListener( "scroll", _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지숨기기
      // badgeEL.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEL, 0.6, {
        opacity: 0,
        display: "none",
        // 실제화면에서 진짜 없애주기위해서 none사용
      });
      // 버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0
      });
    } else {
      // 배지보이기
      // badgeEL.style.display = 'block';
      gsap.to(badgeEL, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100 // 오른쪽으로 100px이동해서 안보이게 
      });
    }
  }, 300));

  toTopEl.addEventListener('click', function() {
    gsap.to(window, 0.7, {
      scrollTo: 0 // 이걸 사용하려고 gsap plugin 가져온거
    });
  });
// _.throttle(함수,시간)
// 300 = 0.3s 의미 300의단위는 ms
// 화면이 실행될때 생기는 스크롤을 제안하는것 무거워지지않게

// 화면에서 badges가 빠르게 없어지는걸 천천히 없애주는것
// google검색 gsap cdn https://cdnjs.com/libraries/gsap



// *visual title 사진들 순차적으로 나타나게
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1 2.7 이렇게 나타나게
    opacity: 1,
  });
  // gsap.to(요소, 지속시간, 옵션);
});

// 공지사항 수직 슬라이드 swiper 슬라이드 요소 관리
new Swiper(".notice-line .swiper-container", {
  // new Swiper(선택자, 옵션)
  direction: "vertical",
  autoplay: true, // 자동재생
  loop: true, // 반복재생
});

// .promotion 이미지 수평 슬라이드
new Swiper(".promotion .swiper-container", {
  // direction: 'horizontal' 기본값이라 따로 명시안해도됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수 기본값은 1
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, // 단위ms 0.5s 기본값은 3000
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 이전 슬라이드
    nextEl: ".promotion .swiper-next", // 다음 슬라이드
  },
});

// AWARDS
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

// Promotion 슬라이드 토글 기능
// 스타벅스 프로모션 접어 주는 속성 toggle 눌렀을때 개발자 모드에서 hide 클래스 보임
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false; // 프로모션값이 숨겨져있니? false 아님
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // ! 뒤에 붙어있는 값을 반대값을 주는것 (false에서 true로)
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add("hide");
  } else {
    // 보임처리
    promotionEl.classList.remove("hide");
  }
});

// 부유하는 요소 관리
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// youtube 위에 아이콘 애니메이션
function floatingObject(selecor, delay, size) {
  // gsap.to(요소, 시간, 요소);
  gsap.to(selecor, random(1.5, 2.5), {
    // 애니메이션 동작시간
    y: size, // y축으로 20만큼 왔다갔다
    repeat: -1, // 반복
    yoyo: true, // 둥둥뜨는 에니메이션
    ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing
    delay: random(0, delay), // 지연시간
  });
}
// floatingObject('selecor', delay, size);
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 요소가 화면에 보여짐 여부에 따른 요소 관리
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll("section.scroll-spy");
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스를 넣어주고 빼줌
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
}); // 애니메이션 처리는 css에서 처리함

