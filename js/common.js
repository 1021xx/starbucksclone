// main index페이지 말고 다른페이지가 나왔을때 공통으로 사용하는 내용
// 개발자모드 오류를 줄여주기위한것


// 검색창제어
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// html 부분에서 .search 클래스를 찾아주는것

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// 그리고 클릭이라는 이벤트를 추가하고, 함수가 실행될때 그 함수가 포커스되게하는것
// 돋보기를 눌르면 검색창이 커지지 않는걸 누르면 커지게 하는 거

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// serchinputel에서 포커스가 되면 input요소에 통합검색을 넣어주는것
// set - ~을지정하다 Attribute - html속성 placeholder - input요소에추가할수있는 html속성

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
// 포커스를 하지않았을때 통합검색을 지우는것
// focus->blur / add->remove / 통합검색->빈태그로''



// footer copyright부분 | 올해가 몇 년도인지 계산 
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // innerText 넣어도됨