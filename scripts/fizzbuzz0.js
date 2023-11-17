function injectNavLinks() {
    // Define the common navigation links
    const navLinksHTML = `
        <a href="index.html">Home</a>&nbsp;||
        <a href="introduction.html">Introduction</a>&nbsp;||
        <a href="contract.html">Contract</a>&nbsp;||
        <a href="brand.html">Brand</a>&nbsp;||
        <a id="fizzBuzz0" href="fizzbuzz0.html">Fizz Buzz 0</a>&nbsp;||
        <a id="fizzBuzz1" href="fizzbuzz1.html">Fizz Buzz 1</a>&nbsp;||
        <a id="fizzBuzz2" href="fizzbuzz2.html">Fizz Buzz 2</a>
    `;
    // Inject the navigation links
    document.getElementById('dynamic-nav').innerHTML = navLinksHTML;

    // Attach event listeners for the dynamic navigation links
    document.getElementById('fizzBuzz0').addEventListener('click', (e) => {
        e.preventDefault();
        updateHeader("Fizz Buzz 0");
    });
    document.getElementById('fizzBuzz1').addEventListener('click', (e) => {
        e.preventDefault();
        updateHeader("Fizz Buzz 1");
    });
    document.getElementById('fizzBuzz2').addEventListener('click', (e) => {
        e.preventDefault();
        updateHeader("Fizz Buzz 2");
    });
}

function updateHeader(headerText) {
    document.getElementById('main-header').innerText = 'Adeolu Abiodun\'s Angelic Angelfish | ' + headerText;
}

function showAlert(event) {
    // Prevent the default form submission
    event.preventDefault();

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

    // Clear previous results
    document.getElementById('fizzbuzz-results').innerHTML = "";
}

document.addEventListener('DOMContentLoaded', injectNavLinks);
