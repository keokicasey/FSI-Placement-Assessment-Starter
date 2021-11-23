let yourName = "Keoki Casey"

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total

let gbQuantity = document.querySelector('#qty-gb')
let ccQuantity = document.querySelector('#qty-cc')
let sugarQuantity = document.querySelector('#qty-sugar')
let totalQuantity = document.querySelector('#qty-total')

if(gb === null){
    gb = 0
}

if(cc === null){
    cc = 0
}

if(sugar === null){
    sugar = 0
}

if(total === null){
    total = 0
}

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    gb = parseInt(gb) + 1
    gbQuantity.textContent = gb
    totalQuantity.textContent = gb + cc + sugar
})

document.getElementById('minus-gb').addEventListener('click', function(){
    gb = parseInt(gb) - 1
    if (gb <= 0){
        gb = 0
    }
    gbQuantity.textContent = gb
    totalQuantity.textContent = gb + cc + sugar
})

document.getElementById('add-cc').addEventListener('click', function(){
    cc = parseInt(cc) + 1
    ccQuantity.textContent = cc
    totalQuantity.textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function(){
    cc = parseInt(cc) - 1
    if (cc <= 0){
        cc = 0
    }
    ccQuantity.textContent = cc
    totalQuantity.textContent = gb + cc + sugar
})

document.getElementById('add-sugar').addEventListener('click', function(){
    sugar = parseInt(sugar) + 1
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = gb + cc + sugar
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar = parseInt(sugar) - 1
    if (sugar <= 0){
        sugar = 0
    }
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = gb + cc + sugar
})