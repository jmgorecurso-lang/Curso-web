// Selecciona el elemento con id 'display' para mostrar el resultado de las operaciones.
let display = document.getElementById('display'); 

// Inicializa las variables para almacenar el operando actual, el operando anterior y la operación seleccionada.
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Función para limpiar el display y reiniciar los operandos y la operación.
function clearDisplay() {
    currentOperand = '';  // Resetea el operando actual.
    previousOperand = '';  // Resetea el operando anterior.
    operation = undefined;  // Resetea la operación.
    updateDisplay();  // Actualiza el display.
}

// Función para añadir un número al operando actual.
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;  // Evita agregar más de un punto decimal.
    currentOperand = currentOperand.toString() + number.toString();  // Añade el número al operando actual.
    updateDisplay();  // Actualiza el display.
}

// Función para seleccionar una operación.
function chooseOperation(op) {
    if (currentOperand === '') return;  // No permite seleccionar una operación sin un operando actual.
    if (previousOperand !== '') {
        compute();  // Si ya hay un operando anterior, calcula el resultado antes de seleccionar una nueva operación.
    }
    operation = op;  // Asigna la operación seleccionada.
    previousOperand = currentOperand;  // El operando actual se convierte en el operando anterior.
    currentOperand = '';  // Resetea el operando actual.
    updateDisplay();  // Actualiza el display.
}

// Función para realizar el cálculo basado en la operación seleccionada.
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);  // Convierte el operando anterior a un número de punto flotante.
    const current = parseFloat(currentOperand);  // Convierte el operando actual a un número de punto flotante.

    if (isNaN(prev) || isNaN(current)) return;  // Si alguno de los operandos no es un número, no hace nada.

    // Realiza la operación correspondiente según el operador seleccionado.
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = (prev * current) / 100;
            break;
        case '^':
            computation = Math.pow(prev, current);
            break;
        case '√':
            computation = Math.sqrt(current);
            break;
        default:
            return;  // Si la operación no es válida, no hace nada.
    }

    // Redondea el resultado para evitar errores de precisión con decimales.
    currentOperand = Math.round(computation * 1000000) / 1000000;  
    operation = undefined;  // Resetea la operación.
    previousOperand = '';  // Resetea el operando anterior.
    updateDisplay();  // Actualiza el display.
}

// Función para actualizar el display de la calculadora.
function updateDisplay() {
    if (operation === '√') {
        display.innerText = `√(${currentOperand})`;  // Muestra la raíz cuadrada.
    } else if (operation != null && previousOperand !== '') {
        display.innerText = `${previousOperand} ${operation} ${currentOperand || ''}`;  // Muestra la operación y los operandos.
    } else {
        display.innerText = currentOperand || '0';  // Muestra el operando actual o 0 si está vacío.
    }
}

// Llama a la función para limpiar el display cuando se carga la calculadora.
clearDisplay();
        