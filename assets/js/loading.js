//scroll lock
const loader = document.querySelector("#loading_wrap")
const loader_wrap = document.querySelector("#container")
/**
 * 휠 못하게
 */
//로딩 휠 못하게 막기
loader.addEventListener("wheel", preventScroll, { passive: false })

function preventScroll(e) {
  e.preventDefault()
  e.stopPropagation()

  return false
}

// 페이지가 로드되면 로딩바가 사라짐
function byeloader() {
  loader.classList.add("bye")
}

window.addEventListener("load", function (e) {
  // 페이지 로딩타임을 알고 싶어
  const loadingTime = e.timeStamp
  setTimeout(byeloader, loadingTime * 1.2)
})
