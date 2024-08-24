var n;
const inputNumList = [];

function callInput() {
    n = parseFloat(prompt("Enter an integer (a negative integer to quit):", "0"));
    return n;
}


callInput();

if (n < 0) {
    alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0.");
} else {

    do {
        if (!isNaN(n) && n >= 0) {
            inputNumList.push(n);
        } else if (isNaN(n)) {
            console.log("Invalid input. Please enter a valid number.");
        }
        callInput();
    } while (n >= 0);

    if (inputNumList.length > 0) {

        const sum = inputNumList.reduce((a, b) => a + b, 0);
        const average = sum / inputNumList.length;
        const min = Math.min(...inputNumList);
        const max = Math.max(...inputNumList);

        alert("For the list " + inputNumList.join(", ") +
              ", the average is " + average +
              ", the minimum is " + min +
              ", the maximum is " + max);
    } else {
        alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0.");
    }
}