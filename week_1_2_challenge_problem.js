function sum(num1 , num2){
    let result = num1 + num2;
    return result;
}

function displayResult(value){
    console.log("Result of the sum is: " + value);
}

function displayResultPassive(data){
    console.log("The data received is: " + data);
}


// two function calls
const ans = sum(1,2);
displayResult(ans);

// but the challeng is that you have to do with a single function call only
displayResult(sum(1,2));