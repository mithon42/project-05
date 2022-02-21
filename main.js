/*
 *** Project Requirements==>
 * - Change the background color by generating random rga color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a button to copy the color code
 * - Add a Toast message when copy
 * - User can type their own Hex code too
*/


// Step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary reference
// step 4 - handle the click event
// step 5 - handle the copy button click event
// step 6 - Active toast message
// step 7 - create a dynamic toast message
// step 8 - clear toast message
// step 9 - create isHexValid function
// step 10 - implement change handler on input field
// step 11 - prevent copying hex code if it is not valid


// Global
let div = null
window.onload = () =>{
    main()
}
// main Function
function main(){
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('changeBtn')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copyBtn')
    
    changeBtn.addEventListener('click', function(){
        const bgColor =  createHexColor()
        root.style.backgroundColor = bgColor
        output.value = bgColor
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
        if(div !== null){
            div.remove()
            div = null
        }
        generateToastMessage(`${output.value} copied`)
    })
    output.addEventListener('click', function(e){
        const color = e.target.value
        if(color && isValidHex()){
            root.style.backgroundColor = color
        }
    })
}

// Create Generate Color
function createHexColor(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// create Toast Message Div
function generateToastMessage(msg){
    div = document.createElement('div')
    div.innerHTML = msg
    div.className = 'toast-message toast-message-slide-in'

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend', function(){
            div.remove()
            div = null
        })
    })
    document.body.appendChild(div)
}

// Check Valid Hex Color
/**
 * @param {string} color : ;
 */
function isValidHex(color){
    if(color.length !== 7) return false
    if(color[0] !== '#') return false

    color = color.substring[1]
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}