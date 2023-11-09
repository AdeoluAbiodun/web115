function showAlert() {
    let firstName = document.getElementById("first-name").value;
    let middleInitial = document.getElementById("middle-initial").value;
    let lastName = document.getElementById("last-name").value;

    // Check if any of the fields are empty
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }

    let message = "Welcome, " + firstName + " " + middleInitial + "." + " " + lastName + "!";
    alert(message);

    // Ask the user how high they want to count
    let count = parseInt(prompt("How high do you want to count, " + firstName + "?"));

    // Check if the count is a valid number
    if (isNaN(count)) {
        alert("Please enter a valid number for counting.");
        return;
    }

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