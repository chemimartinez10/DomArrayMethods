//Variables and const
const main = document.getElementById('main')
const btnAddUser = document.getElementById('add-user')
const btnDouble = document.getElementById('double')
const btnMillionaires = document.getElementById('show-millionaires')
const btnSort = document.getElementById('sort')
const btnCalculate = document.getElementById('calculate-wealth')

let data = []


//METHODS//


//--fetch--
async function getRandomUser() {
    const res = await fetch('https://randomapi.com/api/xruuy0yt?key=QVPF-ELP2-XZ2H-RHXC')
    const data = await res.json()

    const userName = data.results[0].name
    const newUser = {
        name: `${userName}`,
        money: Math.floor(Math.random() * 1000000),
    }

    addUser(newUser)

}
//--add users--
function addUser(obj) {
    data.push(obj)
    updateDOM()
}

// --Format number as money -- https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//--update HTML--
function updateDOM(providedData = data) {
    //clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element)
    })
}
//--doblue Money--
function doubleMoney() {
    data = data.map(user => {
        return {
            ...user,
            money: user.money * 2,
        }
    })

    updateDOM()
}

//--sort for Money--
function sortMoney() {
    data = data.sort((a, b) => b.money - a.money)
    updateDOM()
}
//--show only millionaires--
function showMillionaires() {
    data = data.filter(user => user.money > 999999)
    updateDOM()
}

function calculateTotal() {
    const total = data.reduce((acc, num) => (acc += num.money), 0)
    const wealthEl = document.createElement('div')
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`
    main.appendChild(wealthEl)
}

//Event Listeners

btnAddUser.addEventListener('click', getRandomUser)
btnDouble.addEventListener('click', doubleMoney)
btnSort.addEventListener('click', sortMoney)
btnMillionaires.addEventListener('click', showMillionaires)
btnCalculate.addEventListener('click', calculateTotal)

//Execute