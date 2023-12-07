//Variables
let score = 0
let spin = 0
const spinButton = document.querySelector('#spinButton')
const resetButton = document.querySelector('#resetButton')
const slotReels = document.querySelectorAll('.square')
const scoreDisplay = document.querySelector('#score')
const spinDisplay = document.querySelector('#spin')
const msgDisplay = document.querySelector('#msg')

scoreDisplay.innerHTML = "Score: " + score
spinDisplay.innerHTML = "Spin # " + spin



const slotArray = [1, 2, 3, 4, 5, 6, 7]

const SLOT_IMGS = {
    '1': '🍒',
    '2': '🍐',
    '3': '🎲',
    '4': '🍀',
    '5': '🍑',
    '6': '💰',
    '7': '💎'
}

//Event Listeners
spinButton.addEventListener('click', spinSlots)
resetButton.addEventListener('click', iniit)


//Cached Elements
let slotRow = document.querySelector('#slotMachine .row1 .door')
let slotRow2 = document.querySelector('#slotMachine .row2 .door')
let slotRow3 = document.querySelector('#slotMachine .row3 .door')

//Functions

function addImages() {
    slotReels.forEach(function (slot) {
        const slotValue = slot.innerHTML; // Get the value inside the slot
        const color = SLOT_IMGS[slotValue]; // Get the corresponding color from SLOT_IMGS
        if (color) {
            slot.innerHTML = color;
        }
    })
}
function fillSlotRow(row) {
    let fillArray = [1, 2, 3, 4, 5, 6, 7]
    let count = 0

    function randomValues() {
        const randomIndex = Math.floor(Math.random() * fillArray.length);
        const value = fillArray[randomIndex];
        count += 1

        if (count === 3) {
            fillArray = [1, 2, 3, 4, 5, 6, 7]
            count = 0
        }

        fillArray.splice(randomIndex, 1);
        return value;
    }
    const slotValue1 = randomValues()
    const slotValue2 = randomValues()
    const slotValue3 = randomValues()

    let faSlotValue1 = row.querySelector(':first-child')
    let faSlotValue2 = row.querySelector(':nth-child(2)')
    let faSlotValue3 = row.querySelector(':nth-child(3)')

    faSlotValue1.innerHTML = slotValue1
    faSlotValue2.innerHTML = slotValue2
    faSlotValue3.innerHTML = slotValue3

    //row.classList.add('element-to-fade')

}

function fillSlots() {
    fillSlotRow(slotRow)
    fillSlotRow(slotRow2)
    fillSlotRow(slotRow3)

}

function resetSlots() {
    let clearSlots = document.querySelectorAll('.square')
    clearSlots.forEach(function (slot) {
        slot.innerHTML = ''
    })
}

function spinSlots() {
    spin++
    resetSlots()
    fillSlots()
    calculateScore()
    addImages()
    spinCounter()
}



function calculateScore() {
    let row1 = slotRow.querySelector(':nth-child(2)').innerHTML
    let row2 = slotRow2.querySelector(':nth-child(2)').innerHTML
    let row3 = slotRow3.querySelector(':nth-child(2)').innerHTML
    if (row1 === row2 && row1 === row3) {
        score += parseInt(row1)
    }

    scoreDisplay.innerHTML = "Score: " + score
    spinDisplay.innerHTML = "Spin # " + spin

}
function spinCounter() {
    if (spin === 10) {
        msgDisplay.innerHTML = "Your Score " + score
        spinButton.disabled = true
    }

}



function iniit() {
    spin = 0
    score = 0
    fillSlotRow(slotRow)
    fillSlotRow(slotRow2)
    fillSlotRow(slotRow3)
    addImages()
    calculateScore()
    spinButton.disabled = false
}





iniit()
