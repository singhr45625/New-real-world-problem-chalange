// Wait until the entire HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the button and the message paragraph by their IDs
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');

    // 2. Define the function that runs when the button is clicked
    function showGreeting() {
        // Change the text content of the message paragraph
        greetingMessage.textContent = 'Hello there! Thanks for visiting my simple homepage! 😊';
        
        // Optional: Disable the button after it's clicked once
        // greetButton.disabled = true;
    }

    // 3. Attach the function to the button's 'click' event
    greetButton.addEventListener('click', showGreeting);
});