const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null

ctx.lineWidth = 5 // pixels

let draw = false


document.getElementById('nav').style.width = innerWidth

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

document.getElementById('brush').addEventListener('input', (ev) => {
    
    ctx.lineWidth = ev.target.value
    
})

function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
  
}

document.querySelector(".load").addEventListener("click", () => {

    importData();
    
});

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Saving drawing as image
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    // what ever name you specify here
    // the image will be saved as that name
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)
window.addEventListener("touchstart", (e) => draw = true)
window.addEventListener("touchend", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    prevX = currentX
    prevY = currentY
})

window.addEventListener("touchmove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.touches[0].clientX
        prevY = e.touches[0].clientY
        return
    }

    let currentX = e.touches[0].clientX
    let currentY = e.touches[0].clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    prevX = currentX
    prevY = currentY
})
