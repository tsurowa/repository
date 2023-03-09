function calculator() {
    let input1Element;
    let input2Element;
    let inputResultElement;
    let btnSumElement = document.getElementById('sumButton');
    let btnSubtractElement = document.getElementById('subtractButton');
    function init (selector1, selector2, resultSelector) {
        input1Element = document.querySelector(selector1);
        input2Element = document.querySelector(selector2);
        inputResultElement = document.querySelector(resultSelector);
    }
    function add() {
        let sum = Number(input1Element.value) + Number(input2Element.value);
        inputResultElement.value = sum;
    };
    function subtract() {
        let sum = Number(input1Element.value) - Number(input2Element.value);
        inputResultElement.value = sum;
    };
    return obj = {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
