// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function twoAdder() {
    const addition = 10 + 20;
    printValue(`Addition: ${addition}`);
}
// twoAdder();

//TODO: create a function that takes in two values and adds them
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 */

function add(a, b){
    const summation = a + b;
    printValue(`Summation: ${summation}`) 
}

// add(20, 20);

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addTwoAndReturn(x, y) {
    return x + y;
}
const myAddition = addTwoAndReturn(100,30);
//printValue (`Some other addition: ${myAddition}`);

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExpression = function(){
    const addIt = 10 + 50;
    printValue(`AddIt: ${addIt}`)
}
//addExpression();

//TODO: create a function that takes in two values and adds them
const addTwox = function(a, b){
    return sum = a + b;
}
addTwox(50,70);

//printValue(`Sum: ${sum}`);

//TODO: create a function that takes in two values, adds them and returns the value of the addition


// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const arrowAdd = () => {
    printValue(20+1)
}
//arrowAdd();

//TODO: create a function that takes in two values and adds them
const arrowAdd2Param = (a, b) => {
    printValue(a+b)
}
//arrowAdd2Param(50, 60);



//TODO: create a function that takes in two values, adds them and returns the value of the addition
const arrowAdd2ParamReturn = (a, b) => {
    return (a + b);
}
printValue(arrowAdd2ParamReturn(1070, 600));

