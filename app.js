const passwordEl = document.getElementById('password');
const copyButton = document.getElementById('copyButton');
const generateButton = document.querySelector('button');

// Characters for password generation
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Function to generate random password
function generatePassword() {
    let password = "";
    let allChars = upperCase + lowerCase + numbers + symbols;
    
    // Generate 16 character password
    for(let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    
    passwordEl.value = password;
}

// Function to copy password
function copyPassword() {
    if(passwordEl.value) {
        passwordEl.select();
        document.execCommand('copy');
        
        // Visual feedback for copy
        copyButton.style.color = '#04ff00';
        setTimeout(() => {
            copyButton.style.color = '#3eb8ff';
        }, 1000);
    }
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

 
