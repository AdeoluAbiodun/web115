function updateHeader(headerTitle) {
    document.querySelector('header h1').textContent = `Adeolu Abiodun's Angelic Angelfish | ${headerTitle}`;
}

function injectNavLinks() {
    // ... (same as before)
    document.getElementById('dynamic-nav').innerHTML = navLinksHTML;

    // Attach event listeners after injecting navigation links
    document.getElementById('fizzBuzz0').addEventListener('click', () => updateHeader("Fizz Buzz 0"));
    document.getElementById('fizzBuzz1').addEventListener('click', () => updateHeader("Fizz Buzz 1"));
    document.getElementById('fizzBuzz2').addEventListener('click', () => updateHeader("Fizz Buzz 2"));
}

document.addEventListener('DOMContentLoaded', injectNavLinks);

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

/* Dynamic syntax

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
*/
