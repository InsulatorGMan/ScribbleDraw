const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

// ctx is the context of our canvas
// we use ctx to draw on the canvas
const ctx = canvas.getContext("2d")

// lets create a rectangle for testing purposes
ctx.fillStyle = "red"
ctx.fillRect(100, 100, 100, 100)