const display = document.getElementById('display');

function append(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(event.key)) {
        append(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
