const d20 = document.getElementById('d20');
const d20roll = document.getElementById('d20roll');
d20.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 20 + 1);
    d20roll.innerHTML = roll;
})

const d12 = document.getElementById('d12');
const d12roll = document.getElementById('d12roll');
d12.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 12 + 1);
    d12roll.innerHTML = roll;
})

const d10 = document.getElementById('d10');
const d10roll = document.getElementById('d10roll');
d10.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 10 + 1);
    d10roll.innerHTML = roll;
})

const d8 = document.getElementById('d8');
const d8roll = document.getElementById('d8roll');
d8.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 8 + 1);
    d8roll.innerHTML = roll;
})

const d6 = document.getElementById('d6');
const d6roll = document.getElementById('d6roll');
d6.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 6 + 1);
    d6roll.innerHTML = roll;
})

const d4 = document.getElementById('d4');
const d4roll = document.getElementById('d4roll');
d4.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 4 + 1);
    d4roll.innerHTML = roll;
})

