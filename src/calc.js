let round = (value) => Math.round(value * 100) / 100;

let validateNumbers = (...numbers) => {
    if (!numbers.every(Number.isFinite)) {
        throw new TypeError('Los argumentos deben ser números finitos');
    }
};

let add = function(num1, num2) {
    validateNumbers(num1, num2);
    return round(num1 + num2);
};

let sub = function(num1, num2) {
    validateNumbers(num1, num2);
    return round(num1 - num2);
};

let mul = function(num1, num2) {
    validateNumbers(num1, num2);
    return round(num1 * num2);
};

let div = function(num1, num2) {
    validateNumbers(num1, num2);

    if (num2 === 0) {
        throw new RangeError('División por cero');
    }

    return round(num1 / num2);
};

let sqrt = function(num1) {
    validateNumbers(num1);

    if (num1 < 0) {
        throw new RangeError('Raíz de número negativo');
    }

    return Math.sqrt(num1);
};

export {
    add,
    sub,
    mul,
    div,
    sqrt
}
