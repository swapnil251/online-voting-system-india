document.addEventListener("DOMContentLoaded", function () {
    // Selecting the form elements
    const voterInput = document.getElementById("hero-field");
    const submitButton = document.querySelector("button.bg-indigo-500");

    // Function to validate Voter ID
    function validateVoterID(voterID) {
        const voterIDPattern = /^[A-Z]{3}[0-9]{7}$/; // Example: ABC1234567
        return voterIDPattern.test(voterID);
    }

    // Handling the form submission
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        const voterID = voterInput.value.trim();
        if (voterID === "") {
            alert("Please enter your Voter ID.");
        } else if (!validateVoterID(voterID)) {
            alert("Invalid Voter ID format. Please enter a valid ID (e.g., ABC1234567).");
        } else {
            alert("Voter ID submitted successfully!");
            // Here you can send the ID to the backend for further processing
        }
    });
});
