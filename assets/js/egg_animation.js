// 달걀모션에 대한 스크립트
// 초기에는 클릭하면 동작하는 것으로 하였으나 사용자의 편의를 위해 스크롤시 변경
// 스크롤 기준은 자신의 offsetHeight의 높이의 -100px 만큼 스크롤했을때 동작함
// 그런데 이것조차 애니메이션의 버벅임이 있어 없앨까 고민중임
function click_egg() {
  let egg = document.querySelector(".egg")
  let egg_img = document.querySelector(".egg > img")
  let itd = document.querySelectorAll(".itd")
  // let itd_img = document.querySelector(".itd_img")
  const itd_background = document.querySelector(".itd_background")
  const itd_wrap = document.querySelector("#itd_wrap")
  const itd_contents = document.querySelector(".itd_contents")
  let screenWidth = window.innerWidth
  let screenHeight = window.innerHeight
  const itd_title = document.querySelector(".itd_title")
  const itd_sub_title = document.querySelector(".itd_sub_title")
  /*querySelectAll 은 nodeLIst라는 객체로 내보냄
  getElementsByClassName은 htmlCollection 이라는 인터페이스를 내보냄 
  https://imkh.dev/js-nodelist-to-array/ 참고
  */

  //1초 뒤에
  setTimeout(function () {
    itd_wrap.classList.add("on")
    // itd_img.classList.add("on")
    itd_background.classList.add("down_element_ani")
    itd_contents.classList.add("loading_animation")
    itd_title.classList.add("on")
    itd_sub_title.classList.add("on")
    //foreach 로 배열에 한번에 적용 for문으로 생겼던 오류도 해결!
    itd.forEach((itd) => itd.classList.add("on"))
  }, 1000)
}
// 대상의 높이를 구해서 그 높이 보다 scroll이 더 커지면 이벤트 발생

window.addEventListener("scroll", (event) => {
  const main = document.querySelector("#grt_wrap")
  const main_height = main.offsetHeight
  let scrollY = this.scrollY
  //console.log(scrollY)
  if (scrollY > main_height - 100) {
    setTimeout(click_egg(), 1000)
  } else {
  }
})
