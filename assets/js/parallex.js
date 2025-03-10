;(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax)

  // Magic happens here
  function parallax(e) {
    this.querySelectorAll(".itd_img > img").forEach((shift) => {
      const elemss = document.querySelectorAll(".itd_img > img")

      let _w = window.innerWidth / 2
      let _h = window.innerHeight / 2
      let _mouseX = e.clientX
      let _mouseY = e.clientY

      const position = shift.getAttribute("value")
      const x = (_w - e.pageX * position) / 90
      const y = (_h - e.pageY * position) / 90

      shift.style.transform = `translate( ${x}px ,${y}px) `
    })
  }
})()
