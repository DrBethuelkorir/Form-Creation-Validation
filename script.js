document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        username = document.getElementById("username").value.trim();
        email = document.getElementById("email").value.trim();
        password = document.getElementById("password").value.trim();

        let isValid = true;
       const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }
        if (!email.includes("@")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        if(password.length <= 8){
            isValid = false;
            messages.push("password must be at least 8 characters long")
        }

        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.innerText = "Registration successful";
        }
        else {
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.innerHTML = messages.join("<br>");
        }
    });
})