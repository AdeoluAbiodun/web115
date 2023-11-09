// Pre-fill the form with your information
document.getElementById("firstname").value = "Adeolu";
document.getElementById("lastname").value = "Abiodun";
document.getElementById("email").value = "aa@aa.com";

document.getElementById("user-info-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    // Display the form values
    var output = document.getElementById("output");
    output.innerHTML = "<p>First Name: " + firstname + "</p>" +
                       "<p>Last Name: " + lastname + "</p>" +
                       "<p>Email: " + email + "</p>";
});

function clearForm() {
    // Clear the form fields and output
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("output").innerHTML = "";
}