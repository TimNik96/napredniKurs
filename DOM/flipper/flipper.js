const flipper = document.querySelector(".flipper")
const trigger = document.querySelector(".trigger")
const p = document.querySelector(".mojP")

let flipped = false

const toggleFlipper = (flipped, p) => {
//   toggleP(p, flipped)

  if (flipped) {
    trigger.style.left = "59px"
    trigger.style.backgroundColor = "#fff"
    flipper.style.backgroundColor = "#0f0"
    p.style.height = "100px"
    return
  }

  trigger.style.left = "1px"
  trigger.style.backgroundColor = "#888"
  flipper.style.backgroundColor = "#fff"
  p.style.height = "0px"
}

// const toggleP = (p, flipped) => {
//   if (flipped) p.style.height = "100px"
//   else p.style.height = "0px"
// }

trigger.addEventListener("click", () => {
  flipped = !flipped

  toggleFlipper(flipped, p)
})
