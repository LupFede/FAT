let operandoA = 0;
let operandoB = 0;
let operacion = '';
const display = document.getElementById('display');

const addToDisplay = (value) => {
    display.value += value.toString();
    if (operacion) {
        const value = display.value.split(operacion);
        operandoB = Number(value[1]);
    }
    else {
        operandoA = Number(display.value);
    }
}

const init = () => {
    const symbols_list = ['+', '-', '*', '/'];
    for (let i = 0; i < 10; i++) {
        const button = document.getElementById(i.toString());
        console.log(button);
        button.addEventListener('click', () => {
            addToDisplay(i);
        });
    }
    for (let i = 0; i < symbols_list.length; i++) {
        const button = document.getElementById(symbols_list[i]);
        button.addEventListener('click', () => {
            if (!operandoA) return;
            display.value += symbols_list[i];
            operacion = symbols_list[i];
        });
    }
}

const resetear = () => {
    operandoA = 0;
    operandoB = 0;
    operacion = '';
}

const limpiar = () => {
    display.value = '';
    resetear();
}


const resolver = () => {
    console.log(operandoA, operandoB, operacion);
    switch (operacion) {
        case '+':
            display.value = operandoA + operandoB;
            break;
        case '-':
            display.value = operandoA - operandoB;
            break;
        case '*':
            display.value = operandoA * operandoB;
            break;
        case '/':
            display.value = operandoA / operandoB;
            break;
        default:
            display.value = "Error";
            break;
    }
    resetear();
}

document.addEventListener('click', (e) => {
    const button = e.target;
    if (!(button instanceof HTMLButtonElement)) return;
    if (button.id === 'C')
        limpiar();
    if (button.id === '=')
        resolver();
})

init();



// Solución con menos lineas de código
// document.addEventListener('click', (e) => {
//     const button = e.target;
//     if (!(button instanceof HTMLButtonElement)) return;
//     const display = document.getElementById('display');
//
//     if (button.classList.contains('calc_button')) {
//         const key = button.textContent;
//         if (key === 'C') {
//             display.value = '';
//         } else if (key === '=') {
//             try {
//                 display.value = eval(display.value);
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else {
//             display.value += key;
//         }
//     }
// });
