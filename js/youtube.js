// 참고 https://developers.google.com/youtube/iframe_api_reference?hl=ko
// 지원되는 매개변수 https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubePlayerAPIReady() {
  new YT.Player("player", {
    // html에 id를 player이라고 써줘야됨
    videoId: "An6LvWQuj_8", // 주소 v= 다음이 아이디값 | 우리는 영상을 제어해야되기 때문에 소스복사말고 아이디를 가져오는것
    // https://www.youtube.com/watch?v=An6LvWQuj_8
    playerVars: {
      // 영상을 제어하기 위한 변수
      autoplay: true, // 자동 재생 유뮤
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // loop가 true일때는 반복 재생할 유투브 영상 id 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거  | 영상이 실행되면 mute 해주는 event
      },
    },
  });
}
