// onclick
// setInterval
// clearInterval
// if, else if
// querySelector

const percent = document.querySelector(".zeit")
percent.id = "output"
let output = document.getElementById("output")
let counter = 100
let num
const button = document.getElementById("btn")

button.addEventListener('click', (event) => {
    let countDown = setInterval(() => {
        if (counter > 0) {
            --counter
            output.innerHTML = `${counter} %`
        } else {
        
            clearInterval(countDown)
            
        }
    },100)
})
