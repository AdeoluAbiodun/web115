    function isEvenlyDivisible(num1, num2) {
        return num1 % num2 === 0;
    }

    function showAlert() {
        let firstName = document.getElementById("first-name").value;
        let middleInitial = document.getElementById("middle-initial").value;
        let lastName = document.getElementById("last-name").value;
        alert("Welcome, " + firstName + " " + middleInitial + "." + " " + lastName + "!");

        // Clear previous results
        document.getElementById('fizzbuzz-results').innerHTML = '';

        // Perform the count from 1 to 140 and indicate whether each number is evenly divisible by 3 only
        for (let i = 1; i <= 140; i++) {
            const isEvenlyDivisibleBy3 = isEvenlyDivisible(i, 3);
            const result = isEvenlyDivisibleBy3 ? "Divisible by 3" : "Not Divisible by 3";
            document.getElementById('fizzbuzz-results').innerHTML += `<p>${i}. ${result}</p>`;
        }
    } 
    function clearForm() {
        // Clear the form fields
        document.getElementById("first-name").value = "";
        document.getElementById("middle-initial").value = "";
        document.getElementById("last-name").value = "";
    
        // Clear previous results
        document.getElementById('fizzbuzz-results').innerHTML = "";
    }

