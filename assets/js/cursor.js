// navigaor.userAgent 에 대한 문제가 제기되었음
// 방법은 2가지
// 업데이트하거나 무시하거나
function isMobile() {
  var UserAgent = navigator.userAgent

  if (
    UserAgent.match(
      /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
    ) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    return true
  } else {
    return false
  }
}
const cursor = document.querySelector("#cursor")
const follower = document.querySelector(".cursor_follower")
// const carr_point_mobile = document.querySelector(".carr_point")
if (isMobile()) {
  //location.href = "/mobile/index.html";	//모바일페이지
  cursor.style.display = "none"
  follower.style.display = "none"
} else {
  //location.href = "/main.html";		//PC용 페이지

  window.onload = function () {
    let circle1 = document.querySelector(".circle1")
    let circle2 = document.querySelector(".circle2")

    //따라오는 마우스 설정
    let mouseX = 0
    let mouseY = 0

    let ballX = 0
    let ballY = 0

    let speed = 0.1
    function followerAnimation() {
      let distX = mouseX - ballX
      let distY = mouseY - ballY

      ballX = ballX + distX * speed
      ballY = ballY + distY * speed

      follower.style.left = ballX + "px"
      follower.style.top = ballY + "px"

      requestAnimationFrame(followerAnimation)
      // 요 requestAnimationFrame을 쓰니까 부드럽게 동작한다..!
    }
    followerAnimation()

    //마우스가 움직이면

    window.onmousemove = function (e) {
      let x = e.clientX //clientX 는 브라우저 화면 기준이므로 현재 페이지에서 사용하기 부적절함
      let y = e.pageY
      //마우스 커서위치 정하기
      cursor.style.left = x + "px"
      cursor.style.top = y + "px"

      //따라오는 원위치
      mouseX = e.pageX
      mouseY = e.pageY

      function createSpan() {
        circle1.classList.add("expand")
        circle2.classList.add("expand2")

        setTimeout(() => {
          circle1.classList.remove("expand")
          circle2.classList.remove("expand2")
        }, 140)
      }
      //window.addEventListener("click", createSpan)
      //커서 클릭하면 버벅 거림이 생겨서 일단 보류
    }
  }
}
