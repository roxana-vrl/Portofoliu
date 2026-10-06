// Get the menu button
let menuButton = document.getElementById("menuButton");


// Get the navigation links container
let navLinks = document.getElementById("navLinks");


// Open and close the mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Get all navigation links
let navigationLinks = document.querySelectorAll(".nav-links a");


// Close the menu after clicking a navigation link
navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Display the current year in the footer
let year = document.getElementById("year");

year.innerText = new Date().getFullYear();


// Get the contact form
let contactForm = document.getElementById("contactForm");


// Validate form when submitted
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get form fields
    let name = document.getElementById("name");

    let email = document.getElementById("email");

    let message = document.getElementById("message");

    let formMessage = document.getElementById("formMessage");


    // Check if fields are empty
    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        formMessage.innerText =
            "Please complete all fields.";

        formMessage.style.color = "red";

        return;

    }


    // Basic email validation
    if (
        !email.value.includes("@") ||
        !email.value.includes(".")
    ) {

        formMessage.innerText =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }


    // Confirmation message
    formMessage.innerText =
        "Thank you. Your message has been completed.";

    formMessage.style.color = "green";


    // Clear the form
    name.value = "";

    email.value = "";

    message.value = "";

});