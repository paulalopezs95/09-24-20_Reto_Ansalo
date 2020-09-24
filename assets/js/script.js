const letter = document.getElementById("letter").innerText;
const number = document.getElementById("number").innerText;


option1.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter === '') {
        const letter = 'A';
        document.getElementById("letter").value = letter
    } else if (inputNumber === '') {
        const number = '1';
        document.getElementById("number").value = number
    } else {
        alert('Faltan letras')
    }

}


option2.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'A') {
        const letter = inputLetter + ',' + 'B';
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '1') {
        const number = inputNumber + ',' + '2';
        document.getElementById("number").value = number
    }

}

option3.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'B') {
        const letter = inputLetter + ',' + 'C';
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '2') {
        const number = inputNumber + ',' + '3';
        document.getElementById("number").value = number
    }

}

option4.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'C') {
        const letter = inputLetter + ',' + 'D';
        document.getElementById("letter").value = letter

    } else if (inputNumber[inputNumber.length - 1] === '3') {
        const number = inputNumber + ',' + '4';
        document.getElementById("number").value = number
    }
}

option5.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'D') {
        const letter = inputLetter + ',' + 'E'
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '4') {
        const number = inputNumber + ',' + '5';
        document.getElementById("number").value = number
    }
}

option6.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'E') {
        const letter = inputLetter + ',' + 'F'
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '5') {
        const number = inputNumber + ',' + '6';
        document.getElementById("number").value = number
    }
}

option7.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'F') {
        const letter = inputLetter + ',' + 'G'
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '6') {
        const number = inputNumber + ',' + '7';
        document.getElementById("number").value = number
    }
}

option8.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'G') {
        const letter = inputLetter + ',' + 'H'
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '7') {
        const number = inputNumber + ',' + '8';
        document.getElementById("number").value = number
    }
}


option9.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'H') {
        const letter = inputLetter + ',' + 'I'
        document.getElementById("letter").value = letter
    } else if (inputNumber[inputNumber.length - 1] === '8') {
        const number = inputNumber + ',' + '9';
        document.getElementById("number").value = number
    }
}


option10.onclick = function puzzle() {
    let inputLetter = document.getElementById("letter").value;
    let inputNumber = document.getElementById("number").value;
    if (inputLetter[inputLetter.length - 1] === 'I') {
        const letter = inputLetter + ',' + 'J'
        document.getElementById("letter").value = letter

    } else if (inputNumber[inputNumber.length - 1] === '9') {
        const number = inputNumber + ',' + '0';
        document.getElementById("number").value = number
    }
}

borrar.onclick = function limpiar() {
    document.getElementById("myForm").reset();

}