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

//  Korrektur

// const zeit = document.querySelector('.zeit')
// let x = 100;


// const startMe = () => {
//     let interval = setInterval(() => {
//         if (x != 0) {
//             x--
//             zeit.innerHTML = x + '%'
//         } else {
//             zeit.innerHTML = x + '%'
//             clearInterval(interval)
//         }
//     }, 10)
// }

// document.getElementById('btn').addEventListener('click', startMe)
