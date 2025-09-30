
document.addEventListener('DOMContentLoaded', function() {
  
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');

  
    function showGreeting() {
        greetingMessage.textContent = 'Hello there! Thanks for visiting my simple homepage! 😊';
        
    }

    greetButton.addEventListener('click', showGreeting);
});