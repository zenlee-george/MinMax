document.getElementById("check").addEventListener("click", function() {
    var inputArray = document.getElementById("arrayInput").value;
    var minSpan = document.getElementById("min");
    var maxSpan = document.getElementById("max");


    var numbers = inputArray.split(",").map(function(x) {
        return parseFloat(x);
    });


    if (numbers.some(isNaN)) {
        alert("Please enter a valid array of numbers");
        return;
    }


    var minValue = Math.min(...numbers);
    var maxValue = Math.max(...numbers);

    minSpan.textContent = minValue;
    maxSpan.textContent = maxValue;
});