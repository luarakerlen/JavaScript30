const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
    //e.stopPropagation() //stop propagation
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //defalt: false
    once:true
}))

button.addEventListener('click', () => {
    console.log('Clicou!')
}, {
    once: true //clica apenas uma vez
})