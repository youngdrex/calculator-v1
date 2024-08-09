document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (isFinite(value)) { // If the button pressed is a number
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === '=') {
                if (operator && firstOperand !== null && currentInput !== '') {
                    const secondOperand = parseFloat(currentInput);
                    let result = 0;
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.textContent = result;
                    currentInput = '';
                    firstOperand = result;
                    operator = null;
                }
            } else if (value === 'C') { // If the button pressed is clear
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '';
            } else { // If the button pressed is an operator
                if (currentInput !== '') {
                    if (firstOperand === null) {
                        firstOperand = parseFloat(currentInput);
                    } else if (operator) {
                        const secondOperand = parseFloat(currentInput);
                        switch (operator) {
                            case '+':
                                firstOperand += secondOperand;
                                break;
                            case '-':
                                firstOperand -= secondOperand;
                                break;
                            case '*':
                                firstOperand *= secondOperand;
                                break;
                            case '/':
                                firstOperand /= secondOperand;
                                break;
                        }
                        display.textContent = firstOperand;
                    }
                    currentInput = '';
                }
                operator = value;
            }
        });
    });
});

