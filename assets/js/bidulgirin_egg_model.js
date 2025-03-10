// cdn으로 처리한 이유는 병목현상 때문이다
// 이 스크립트는 three.js를 이용한 모델링 설정이다
// 카메라, 빛, 그리고 아름다운 모션을 배열에 넣어 꺼내쓰는 방식이다

// import * as THREE from "./../../node_modules/three"
// import { OrbitControls } from "/../../node_modules/three/examples/jsm/controls/OrbitControls.js"
// import { GLTFLoader } from "/../../node_modules/three/examples/jsm/loaders/GLTFLoader.js"

// three.js cdn
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js"
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"

// ----- 주제: glb 파일 불러오기

export default function bidulgirin() {
  // Renderer
  const canvas = document.querySelector("#threeJs_object")
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })

  // pc는 400을 기본 사이즈로 정하고 -> 화면에따라 canvas 기본값이 바뀌어야함
  // canvas = 400 + 스크롤 양 * n
  let screenWidth = window.innerWidth
  var factor // percentage of the screen
  var w
  if (screenWidth > 800) {
    factor = 0.4
  } else if (screenWidth > 500) {
    factor = 0.5
  } else {
    factor = 0.8
  }
  w = window.innerWidth * factor
  var h = window.innerHeight
  renderer.setSize(w, w)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)

  // Scene
  const scene = new THREE.Scene()

  // Camera
  const camera = new THREE.PerspectiveCamera(
    30,
    1, //window.innerWidth , 랑 height 없애고 이걸로..
    0.1,
    1000
  )
  camera.position.set(-0.1, 0, 3)

  // scene.background = new THREE.Color(0xffffff)
  // scene.background.opacity = 0
  scene.add(camera)

  // Light
  const ambientLight = new THREE.AmbientLight("white", 0.8)
  scene.add(ambientLight)
  const directionalLight = new THREE.DirectionalLight("white", 1)
  directionalLight.position.x = 2
  directionalLight.position.z = 4
  scene.add(directionalLight)

  // Controls
  // const controls = new OrbitControls(camera, renderer.domElement)
  //controls.enableZoom = false

  // gltf loader
  let mixer
  const gltfLoader = new GLTFLoader()
  let globalGltf
  gltfLoader.load("./assets/blender/EGG.glb", (gltf) => {
    // console.log(gltf.scene.children[0]);
    const me = gltf.scene.children[0]
    scene.add(gltf.scene)
    renderer.render(scene, camera)

    mixer = new THREE.AnimationMixer(me)

    // const actions = []
    // actions[0] = mixer.clipAction(gltf.animations[0])
    // actions[1] = mixer.clipAction(gltf.animations[1])

    // actions[0].play()
    // actions[1].play()

    function animate() {
      requestAnimationFrame(animate)
      gltf.scene.rotation.y -= 0.01
    }
    animate()
  })

  // 그리기
  // 안정적인 애니메이션 구동을위해 Clock 메서드 이용
  const clock = new THREE.Clock()

  const draw = () => {
    const delta = clock.getDelta()

    if (mixer) mixer.update(delta)
    renderer.render(scene, camera)
    renderer.setAnimationLoop(draw)
  }
  //화면크기가 변경될때
  function setSize() {
    camera.aspect = 1 / 1
    camera.updateProjectionMatrix()
    //크기가 너무 작아지거나 커지지 않도록 조정
    if (window.innerWidth < 900) {
      if (w > 400) {
        w = 400
      } else if (w < 200) {
        w = 300
      } else {
        w = window.innerWidth
      }
    } else {
      w = 400
    }

    renderer.setSize(w, w)
    renderer.render(scene, camera)
  }

  // 이벤트
  window.addEventListener("resize", setSize)

  draw()

  //스크롤 시 변화
  canvas.onclick = function () {
    // this.style.backgroundColor = "white"
  }
  window.addEventListener("scroll", function () {
    let scroll = window.scrollY
    let Greetings = document.querySelector(".grts")
    const background = document.querySelector(".grt_background")
    if (scroll > 200) {
      background.classList.add("scrolled")
      // canvas.classList.add("scrolled")
      Greetings.classList.add("scrolled")
    } else {
      background.classList.remove("scrolled")
      // canvas.classList.remove("scrolled")
      Greetings.classList.remove("scrolled")
    }
    // if (scroll > 300) {
    //   renderer.setSize(0, 0)
    // } else {
    //   renderer.setSize(w + scroll, w + scroll)
    // }
  })
}
