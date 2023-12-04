//Variables
let score = 0
let spin = 0

const slotArray = [1, 2, 3, 4, 5, 6, 7]



//Cached Elements
let slotRow = document.querySelector('.row1')
let slotRow2 = document.querySelector('.row2')
let slotRow3 = document.querySelector('.row3')

//Functions

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

    console.log(count)
    console.log(fillArray)

}

function resetSlots() {
    let clearSlots = document.querySelectorAll('.square')
    clearSlots.forEach(function (slot) {
        slot.innerHTML = ''
    })
}

function calculateScore() {
    let row1 = slotRow.querySelector(':first-child').innerHTML
    let row2 = slotRow2.querySelector(':nth-child(2)').innerHTML
    let row3 = slotRow3.querySelector(':nth-child(3)').innerHTML
    if (row1 === row2 && row1 === row3) {
        score += row1
    }
}

function iniit() {
    fillSlotRow(slotRow)
    fillSlotRow(slotRow2)
    fillSlotRow(slotRow3)
}


