const customSwitch1 = document.getElementById('customSwitch1');
const customSwitch2 = document.getElementById('customSwitch2');
const container = document.getElementById('container');

customSwitch1.onclick = function dark() {
    if (customSwitch1.checked) {
        localStorage.setItem('tema', 'customSwitch1');
        container.classList.toggle('dark');
        customSwitch2.checked = false;
    } else {
        container.classList.remove('dark');
        container.className = 'container';
        localStorage.setItem('tema', 'container');
    }
}

customSwitch2.onclick = function retro() {
    if (customSwitch2.checked) {
        localStorage.setItem('tema', 'customSwitch2');
        container.classList.toggle('retro');
        customSwitch1.checked = false;

    } else {
        container.classList.remove('retro');
        container.className = 'container';
        localStorage.setItem('tema', 'container');
    }

}

const temaEnStorage = () => {

    const temaGuardado = localStorage.getItem('tema')
    if (temaGuardado == 'customSwitch1') {
        customSwitch1.checked = true;
        container.classList.toggle('dark');
    } else if (temaGuardado == 'customSwitch2') {
        customSwitch2.checked = true;
        container.classList.toggle('retro');

    }
    /* localStorage.clear() */
}

temaEnStorage()