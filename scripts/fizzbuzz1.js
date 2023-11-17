function updateHeader(headerTitle) {
    // Update the header title based on the current page
    document.querySelector('header h1').textContent = `Adeolu Abiodun's Angelic Angelfish | ${headerTitle}`;
}

function injectNavLinks() {
    // Define the common navigation links
    const navLinksHTML = `
        <nav>
            <a href="index.html">Home</a>&nbsp;||
            <a href="introduction.html">Introduction</a>&nbsp;||
            <a href="contract.html">Contract</a>&nbsp;||
            <a href="brand.html">Brand</a>&nbsp;||
            <a href="fizzbuzz0.html">Fizz Buzz 0</a>&nbsp;||
            <a href="fizzbuzz1.html">Fizz Buzz 1</a>&nbsp;||
            <a href="fizzbuzz2.html">Fizz Buzz 2</a>
        </nav>
    `;

    // Inject the navigation links into the header
    document.querySelector('header').insertAdjacentHTML('beforeend', navLinksHTML);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Inject navigation links on page load
    injectNavLinks();

    // Add event listeners for dynamic header update
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            const pageName = link.textContent;
            updateHeader(pageName);
        });
    });
});


function showAlert() {
        let firstName = document.getElementById("first-name").value;
        let middleInitial = document.getElementById("middle-initial").value;
        let lastName = document.getElementById("last-name").value;
        alert("Welcome, " + firstName + " " + middleInitial + "." + " " + lastName + "!");

        // Clear previous results
        document.getElementById('fizzbuzz-results').innerHTML = '';

        // Perform the count from 1 to 140 and indicate whether each number is even or odd
        for (let i = 1; i <= 140; i++) {
            const isEven = i % 2 === 0;
            const evenOrOdd = isEven ? "Roar!" : "Pitch!";
            document.getElementById('fizzbuzz-results').innerHTML += `<p>${i}. ${evenOrOdd}</p>`;
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

//Dynamic syntax

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('fizzBuzz0').addEventListener('click', () => {
        updateHeader("Fizz Buzz 0");
    });

    document.getElementById('fizzBuzz1').addEventListener('click', () => {
        updateHeader("Fizz Buzz 1");
    });

    document.getElementById('fizzBuzz2').addEventListener('click', () => {
        updateHeader("Fizz Buzz 2");
    });
});
