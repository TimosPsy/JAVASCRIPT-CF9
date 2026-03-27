const DEFAULT = 0;
let counter = DEFAULT

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
    document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
    document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
    render()
})

//Controllers
function onDecreaseClicked() {
    //Validation
    decreaseCounter()
}

function onResetClicked() {
    //Validation
    resetCounter()
}

function onIncreaseClicked() {
    //Validation
    increaseCounter()
}

// Model
function decreaseCounter() {
    counter--
    render()
}

function resetCounter() {
    counter = DEFAULT
    render()
}

function increaseCounter() {
    counter++
    render()
}

//View
function render() {
    const counterEl = document.querySelector('#counter')
    counterEl.textContent = counter
    styleCounter(counterEl)
}

function styleCounter(counterEl) {
    counterEl.classList.remove('color-green', 'color-red', 'color-black')
    counterEl.classList.add(counter > 0 ? 'color-green' : counter < 0 ? 'color-red' : 'color-black')
}
