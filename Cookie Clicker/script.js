let = cookies = 0;

let cursors = 0;
let factory = 0;

let cursorCost = 25;
let factoryCost = 100

const cookiesEl = document.getElementById("cookies");

const cursorCostEl = document.getElementById("cursorCost");
const factoryCostEl = document.getElementById("factoryCost");

const cursorCountEl = document.getElementById("cursorCount");
const factoryCountEl = document.getElementById("factoryCount");

function updateUI() {
    cookiesEl.textContent = Math.floor(cookies);

    cursorCostEl.textContent = cursorCost;
    factoryCostEl.textContent = factoryCost;

    cursorCountEl.textContent = cursors;
    factoryCountEl.textContent = factories;

}

document.getElementById("cookie").addEventListener("click", () => {
    cookies++;
    updateUI();
});

document.getElementById("cursorBtn").addEventListener("click", () => {
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cursor++;


        cursorCost = Math.floor(cursorCost * 1.25)

        updateUI();

    }
    
})