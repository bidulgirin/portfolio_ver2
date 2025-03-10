//화면에서 보일때 원하는 객체의 애니메이션 발생하게
const body = document.querySelector("body") //body
const carr_wrap = document.querySelector("#carr_wrap") //career 파트

let backOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}
let back = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // 가시성의 변화가 있으면 관찰 대상 전체에 대한 콜백이 실행되므로,
    // 관찰 대상의 교차 상태가 false일(보이지 않는) 경우 실행하지 않음.
    body.style.background = "rgb(11, 12, 13)"
    if (!entry.isIntersecting) {
      body.style.background = "rgb(238, 234, 232)"
      body.style.transition = "all 0.5s"
      return
    }
  })
}, backOptions)

back.observe(carr_wrap)
