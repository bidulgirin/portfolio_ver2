let menuButton = document.querySelector(".menu_button") //getElementByClassName은 배열을 반환하기 때문에 addEventListener에서 정확히 몇번짼지 알려줘야함
let closeButton = document.querySelector(".close_button")
let menuWrap = document.querySelector(".fixed_navi ul")
let menuElements = document.querySelectorAll(".fixed_navi ul li")
let container = document.querySelector("#container")

let menu1 = document.querySelector(".fixed_navi ul li:nth-child(1)")
let menu2 = document.querySelector(".fixed_navi ul li:nth-child(2)")
let menu3 = document.querySelector(".fixed_navi ul li:nth-child(3)")
let menu4 = document.querySelector(".fixed_navi ul li:nth-child(4)")
//let menu5 = document.querySelector(".fixed_navi ul li:nth-child(5)")
// console.log(
//   "%c" + menuElements.length,
//   `background: ${"#FF0000"}`,
//   `color: ${"#FFFFFF"}`
// )

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// fixed_navi.style.background= "#" + randomColor;

menuButton.addEventListener("click", hello_navi)
closeButton.addEventListener("click", bye_navi)
container.addEventListener("click", bye_navi)
//클릭하면 navi block 다른곳 클릭하면 navi none
function hello_navi() {
  menu1.classList.remove("showNavi1_")
  menu2.classList.remove("showNavi2_")
  menu3.classList.remove("showNavi3_")
  menu4.classList.remove("showNavi4_")
  //menu5.classList.remove("showNavi5_")
  //console.log(menuWrap.style.display ='none');
  if ((menuWrap.style.display = "none")) {
    menuButton.style.display = "none"
    menu1.classList.add("showNavi1")
    menu2.classList.add("showNavi2")
    menu3.classList.add("showNavi3")
    menu4.classList.add("showNavi4")
   // menu5.classList.add("showNavi5")
    closeButton.style.transitionDuration = "1s"
    closeButton.style.display = "block"

    menuWrap.style.transitionDuration = "1s"
    menuWrap.style.display = "block"
  } else {
    menuWrap.style.display = "none"
  }
}
function bye_navi() {
  if ((menuWrap.style.display = "block")) {
    menuButton.style.display = "block"
    closeButton.style.display = "none"
    menuWrap.style.display = "none"
  }
}
