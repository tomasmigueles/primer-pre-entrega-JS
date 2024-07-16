// Función principal que ejecuta la calculadora
function calcular() {
    let operacion = prompt('Ingrese la operación a realizar (+, -, *, /):');
    let numero1 = parseFloat(prompt('Ingrese el primer número:'));
    let numero2 = parseFloat(prompt('Ingrese el segundo número:'));

    let resultado;

    // Evaluamos la operación ingresada y realizamos el cálculo correspondiente
    if (operacion === '+') {
        resultado = sumar(numero1, numero2);
    } else if (operacion === '-') {
        resultado = restar(numero1, numero2);
    } else if (operacion === '*') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === '/') {
        resultado = dividir(numero1, numero2);
    } else {
        alert('Operación no válida.');
        return;
    }

    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`);
}

// Funciones para realizar las operaciones matemáticas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert('No se puede dividir por cero.');
        return;
    }
    return a / b;
}

// Llamamos a la función principal para ejecutar la calculadora
calcular();
