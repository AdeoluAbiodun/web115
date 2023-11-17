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
}

document.addEventListener('DOMContentLoaded', injectNavLinks);



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

