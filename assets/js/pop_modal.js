const stage = document.querySelector(".stage")
const stage2 = document.querySelector(".stage2")
stage.addEventListener("click", lightbox)
// stage2.addEventListener("click", lightbox)
function lightbox(e) {
  if (e.target.classList.contains("popup_button")) {
    e.preventDefault()
    //백그라운드 어둡게
    const lightboxOverlay = document.querySelector("#lightbox-overlay")
    const elem = e.target //stage 안에 직접누르는거야

    //클릭하면 나타나게 뒷배경
    lightboxOverlay.classList.add("visible")
    const pop_contents =
      elem.parentNode.nextSibling.nextSibling.nextSibling.nextSibling

    pop_contents.classList.add("visible")
    //사라지게
    lightboxOverlay.addEventListener("click", function () {
      lightboxOverlay.classList.remove("visible")
      pop_contents.classList.remove("visible")
    })
    //라이트 박스 휠 못하게 막기
    lightboxOverlay.addEventListener("wheel", preventScroll, { passive: false })
    function preventScroll(e) {
      e.preventDefault()
      e.stopPropagation()

      return false
    }
    //e.target의 x_button을 눌렀을때 elem의 wrap만 지워지면됨
    const x_btn = document.querySelectorAll(".btn_close")
    x_btn.forEach(function (e) {
      e.addEventListener("click", function (event) {
        event.preventDefault()
        lightboxOverlay.classList.remove("visible")
        pop_contents.classList.remove("visible")
      })
    })
  }
}
