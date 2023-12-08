//Variables
let score = 0
let spin = 0
const spinButton = document.querySelector('#spinButton')
const resetButton = document.querySelector('#resetButton')
const slotReels = document.querySelectorAll('.square')
const scoreDisplay = document.querySelector('#score')
const spinDisplay = document.querySelector('#spin')
const msgDisplay = document.querySelector('#msg')
const matchLane = document.querySelectorAll('.winLane')
const matchLane2 = document.querySelectorAll('.winLane2')
const matchLane3 = document.querySelectorAll('.winLane3')
const matchLane4 = document.querySelectorAll('.winLane4')
const matchLane5 = document.querySelectorAll('.winLane5')
const winAudio = new Audio("Assets/Win.wav")
const spinAudio = new Audio("/Assets/SpinReels.wav")
const resetAudio = new Audio("Assets/Reset Sound.wav")

scoreDisplay.innerHTML = "Score: " + score
spinDisplay.innerHTML = "Spin # " + spin

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
        const slotValue = slot.innerHTML; 
        const color = SLOT_IMGS[slotValue]; 
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
    spinAudio.play()
    slotReels.forEach(function (slot) {
        slot.classList.add('element-to-fade')
        slot.classList.add('slide-Reels')
        slot.classList.remove('match')

        setTimeout(function () {
            slot.classList.remove('element-to-fade')
            slot.classList.remove('slide-Reels')
        }, 3000);
    });
    rndSpin()
    setTimeout(rndSpin(), 1000)
    setTimeout(function () {
        spin++
        resetSlots()
        fillSlots()
        calculateScore()
        addImages()
        spinCounter()
    }, 3000)

}

function rndSpin() {
    fillSlots()
    addImages()
}

function calculateScore() {
    let row1 = slotRow.querySelector(':nth-child(2)').innerHTML
    let row2 = slotRow2.querySelector(':nth-child(2)').innerHTML
    let row3 = slotRow3.querySelector(':nth-child(2)').innerHTML

    let rowA = slotRow.querySelector(':nth-child(1)').innerHTML
    let rowB = slotRow2.querySelector(':nth-child(1)').innerHTML
    let rowC = slotRow3.querySelector(':nth-child(1)').innerHTML

    let rowD = slotRow.querySelector(':nth-child(3)').innerHTML
    let rowE = slotRow2.querySelector(':nth-child(3)').innerHTML
    let rowF = slotRow3.querySelector(':nth-child(3)').innerHTML

    let rowG = slotRow.querySelector(':nth-child(1)').innerHTML
    let rowH = slotRow2.querySelector(':nth-child(2)').innerHTML
    let rowI = slotRow3.querySelector(':nth-child(3)').innerHTML

    let rowJ = slotRow.querySelector(':nth-child(3)').innerHTML
    let rowK = slotRow2.querySelector(':nth-child(2)').innerHTML
    let rowL = slotRow3.querySelector(':nth-child(1)').innerHTML

    if (row1 === row2 && row1 === row3) {
        score += parseInt(row1)
        matchLane.forEach(function (box) {
            box.classList.add('match')
            winAudio.play()
        })
    }

    if (rowA === rowB && rowA === rowC) {
        score += parseInt(rowA)
        matchLane2.forEach(function (box) {
            box.classList.add('match')
            winAudio.play()
        })
    }
    if (rowD === rowE && rowD === rowF) {
        score += parseInt(rowD)
        matchLane3.forEach(function (box) {
            box.classList.add('match')
            winAudio.play()
        })
    }

    if (rowG === rowH && rowG === rowI) {
        score += parseInt(rowG)
        matchLane4.forEach(function (box) {
            box.classList.add('match')
            winAudio.play()
        })
    }

    if (rowJ === rowK && rowJ === rowL) {
        score += parseInt(rowJ)
        matchLane5.forEach(function (box) {
            box.classList.add('match')
            winAudio.play()
        })
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
    resetAudio.play()
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