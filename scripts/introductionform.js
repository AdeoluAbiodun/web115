// Pre-fill the form with your information
document.getElementById("firstname").value = "Adeolu";
document.getElementById("lastname").value = "Abiodun";
document.getElementById("email").value = "aa@aa.com";

function submitForm() {
    // Get the form values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    // Display the form values
    var output = document.getElementById("output");
    output.innerHTML = "First Name: " + firstname + "<br>" +
                        "Last Name: " + lastname + "<br>" +
                        "Email: " + email;

    return false; // Prevent the form from submitting
}

function clearForm() {
    // Clear the form fields
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("output").innerHTML = "";
}
