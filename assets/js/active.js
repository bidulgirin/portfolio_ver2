//화면에서 보일때 원하는 객체의 애니메이션 발생하게

const grt_img = document.querySelector(".grt_img img") //main에 img
const itd_wrap = document.querySelector("#itd_wrap") // introduce 영역
const itd_char_img = document.querySelector(".int_img img") //introduce에 img
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // 가시성의 변화가 있으면 관찰 대상 전체에 대한 콜백이 실행되므로,
    // 관찰 대상의 교차 상태가 false일(보이지 않는) 경우 실행하지 않음.

    if (entry.isIntersecting) {
      entry.target.classList.add("on")
    } else {
      entry.target.classList.remove("on")
      return
    }
  })
}, options)

//감시할 오브젝트들
observer.observe(itd_char_img)
observer.observe(grt_img)
