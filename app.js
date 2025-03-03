const textEl = document.getElementById('text')
const speedEl = 1

const text = 'Welcome to My Portfolio!'

let idx = 1
let speed = 300 / speedEl

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > 10) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});