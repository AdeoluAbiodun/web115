function showAlert() {
        let firstName = document.getElementById("first-name").value;
        let middleInitial = document.getElementById("middle-initial").value;
        let lastName = document.getElementById("last-name").value;
        let message = "Welcome, " + firstName + " " + middleInitial + "." + " " + lastName + "!";
        alert(message);

        // Ask the user how high they want to count
        let count = parseInt(prompt("How high do you want to count, " + firstName + "?"));

        // Clear previous results
        document.getElementById('fizzbuzz-results').innerHTML = '';

        // Perform the count and indicate whether each number is even or odd
        for (let i = 1; i <= count; i++) {
            const isEven = i % 2 === 0;
            const evenOrOdd = isEven ? "Hocus Pocus - the number is even" : "Zippity Zappity - the number is odd";
            document.getElementById('fizzbuzz-results').innerHTML += `<p>${i} is ${evenOrOdd}.</p>`;
        }
    }

    function clearForm() {
        // Clear the form fields
        document.getElementById("first-name").value = "";
        document.getElementById("middle-initial").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById('fizzbuzz-results').innerHTML = "";
    }
