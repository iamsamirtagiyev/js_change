const example = document.querySelector('.example-text span')
const fontPlus = document.querySelector('.font-size .plus')
const fontMinus = document.querySelector('.font-size .minus')
const borderPlus = document.querySelector('.border-radius .plus')
const borderMinus = document.querySelector('.border-radius .minus')
const heightPlus = document.querySelector('.height .plus')
const heightMinus = document.querySelector('.height .minus')
const widthPlus = document.querySelector('.width .plus')
const widthMinus = document.querySelector('.width .minus')
const textColor = document.querySelector('.text-color input')
const bgColor = document.querySelector('.background input')

let count = 18

fontPlus.addEventListener('click', () => {
    count += 5
    example.style.fontSize = count + "px"
})

fontMinus.addEventListener('click', () => {
    count -= 5
    example.style.fontSize = count + "px"
})

borderPlus.addEventListener('click', () => {
    count += 5
    example.style.borderRadius = count + "px"
})

borderMinus.addEventListener('click', () => {
    count -= 5
    example.style.borderRadius = count + "px"
})

heightPlus.addEventListener('click', () => {
    count += 5
    example.style.height = count + "px"
})

heightMinus.addEventListener('click', () => {
    count -= 5
    example.style.height = count + "px"
})

widthPlus.addEventListener('click', () => {
    count += 5
    example.style.width = count + "px"
})

widthMinus.addEventListener('click', () => {
    count -= 5
    example.style.width = count + "px"
})

textColor.addEventListener('change', ()=>{
    example.style.color = textColor.value
})

bgColor.addEventListener('change', ()=>{
    example.style.background = bgColor.value
})