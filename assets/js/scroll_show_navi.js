// 스크롤되면 나타나는 navi 동작

let headerNavi = document.querySelector("#header")
headerNavi.style.transition = "all 0.3s"
window.addEventListener("scroll", function () {
  let pageScroll = window.scrollY
  if (pageScroll > 400) {
    headerNavi.style.backgroundColor = "rgba(255, 255, 255, 0.305)"
  } else {
    headerNavi.style.background = "transparent"
  }
})
