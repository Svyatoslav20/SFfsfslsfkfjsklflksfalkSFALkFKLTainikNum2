// ОСНОВНОЙ СКРИПТ: механика кнопок, характеристики.//


const clickbtn = document.querySelector('.clickbtn')
let catalog = document.querySelector('.catalog')
const text = document.querySelector('.desc')
const charDiv = document.querySelector('.character')
let autoClicker = null // фиксация имени кликера (необходимо чтобы они не стакнулись)
let autoLevel = 0 // текущий лвл авто-клика
let universal = ''
const state =document.querySelector('.state')

function addCharacter(event) {
    let tempNew = document.querySelector('#template').cloneNode(true).
    content;
    let p = tempNew.querySelector('.main')
    p.textContent = universal
    charDiv.append(tempNew)
}

const buyone = document.querySelector('.buyfir')
const buytwo = document.querySelector('.buysec')
const buythree = document.querySelector('.buythree')
const buyfour = document.querySelector('.buyfour')
const buyfive = document.querySelector('.buyfive')

let monval = document.querySelector('.money')
let money = 1000
let number = 1
clickbtn.addEventListener('click', () => {
    money = money + number
    monval.textContent = money + " кликов" 
})




buyone.addEventListener('click', () => {
    if (money >= 50) {
        let txt = document.querySelector('.descfirst')
        money -= 50
        number += 1
        txt.textContent = "Куплено!"
        const pari = buyone.closest('.catalog')
        pari.style.background = '#e1fde1ff'
        buyone.remove()
        universal = 'двойной клик ⚙'
        addCharacter()
    }
})
// двойной клик

buytwo.addEventListener('click', () => {
    if (money >= 250) {
        let txt = document.querySelector('.descsecond')
        money -= 250
        number += 1
        txt.textContent = "Куплено!"
        const pari = buytwo.closest('.catalog')
        pari.style.background = '#e1fde1ff'
        buytwo.remove()
        universal = 'тройной клик 💥'
        addCharacter()
    }
})
// тройной

buythree.addEventListener('click', () => {
    if (money >= 400) {
        let txt = document.querySelector('.descthree')
        money = money - 400
        if(autoClicker) clearInterval(autoClicker)
        autoClicker = setInterval(() => {
            money += 2
            monval.textContent = money + " кликов"
        }, 1100)
        txt.textContent = "Куплено!"
        const pari = buythree.closest('.catalog')
        pari.style.background = '#e1fde1ff'
        buythree.remove()
        universal = 'автоклик 👊'
        addCharacter()
    }
})
// автоклик первый ур

buyfour.addEventListener('click', () => {
    if (money >= 1000) {
        let txt = document.querySelector('.descfour')
        money = money - 1000
        if(autoClicker) clearInterval(autoClicker)
        number += 1
        autoClicker = setInterval(() => {
            money += 2.75 + Math.floor(Math.random())
            monval.textContent = money + " кликов"
        }, 400)
        txt.textContent = "Куплено!"
        const pari = buyfour.closest('.catalog')
        pari.style.background = '#e1fde1ff'
        clickbtn.style.borderRadius = '13px'
        clickbtn.style.background = '#9bfcffff'
        clickbtn.style.color = '#e8fff7ff'
        state.style.background = '#c1e8faff'
        state.style.color = '#7dd7f3ff'
        buyfour.remove()
        universal = 'подлатанное снаряжение ⚖'
        addCharacter()
    }
})
// Усиленный бафф


function clutch() {
        if(money < 1500) return
        let txt = document.querySelector('.descfive')
        txt.textContent = "Куплено!"
        money = money - 1500
        monval.textContent = money + " кликов"
        const pari = buyfive.closest('.catalog')
        pari.style.background = '#e1fde1ff'
        buyfive.remove()
        randomclutch()
        universal = 'боевой клатч 💣'
        addCharacter()
}
function randomclutch() {
        let tims = Math.floor(Math.random() * 5000) + 4500 // тики
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 20) + 5 // клики
            money += randomNum
            console.log(tims, randomNum)
            monval.textContent = money + " кликов"
            randomclutch()
        }, tims)
    }
buyfive.addEventListener('click', clutch)

// Функции клатча
