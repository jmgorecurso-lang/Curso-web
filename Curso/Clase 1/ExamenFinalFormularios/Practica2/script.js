
// 1. Definir los valores prefijados
const num1 = 15;
const num2 = 30;

// 2. Realizar la suma
const suma = num1 + num2;

// 3. Mostrar los números en el HTML
document.getElementById('numeros').innerText = `${num1} + ${num2}`;

// 4. Mostrar el resultado en el HTML
document.getElementById('sumatotal').innerText = `Total: ${suma}`;

// Opcional: Mostrar en consola
console.log("La suma es: " + suma);