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
    let fillArray = slotArray

    function randomValues() {
        const randomIndex = Math.floor(Math.random() * fillArray.length);
        const value = fillArray[randomIndex];
        
        fillArray.splice(randomIndex, 1);
        return value;
    }
    const slotValue1 = randomValues()
    //const slotValue2 = randomValues()
    //const slotValue3 = randomValues()
    console.log(slotValue1)


    console.log(row.firstElementChild)
    //const faSlotValue1 = row.
    //const faSlotValue2 = row.querySelector('nth-child(2)')
    //const faSlotValue3 = row.querySelector('nth-child(3)')


    //faSlotValue1.innerHTML = slotValue1
    //faSlotValue2.innerHTML = slotValue2
    //faSlotValue3.innerHTML = slotValue3
    }

    // function iniit () {
    //     fillSlotRow(slotRow)
    //     fillSlotRow(slotRow2)
    //     fillSlotRow(slotRow3)
    // }


    