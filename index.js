// Getting elements
const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers'); // Corrected ID
const symbols = document.getElementById('symbols');
const genBtn = document.getElementById('genBtn');
const copyIcon = document.getElementById('copyIcon');

// Showing slider value
sliderValue.innerHTML = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.innerHTML = inputSlider.value;
});

// Button click event to generate password
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

// Function to generate password
const lowerChars = 'abcdefghijklmnopqrstuvwxyz'; // Corrected the typo
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allNumbers = '0123456789';
const allSymbols = '!@#$%^&*';

function generatePassword() {
    let password = '';
    let allChars = '';

    if (lowercase.checked) allChars += lowerChars;
    if (uppercase.checked) allChars += upperChars;
    if (numbers.checked) allChars += allNumbers;
    if (symbols.checked) allChars += allSymbols;

    // If no characters are selected, return an empty password
    

    for (let i = 0; i < inputSlider.value; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return password;
}

// Button click event to copy password
copyIcon.addEventListener('click', () => {
    if (passBox.value) {
        navigator.clipboard.writeText(passBox.value).then(() => {
            // copyIcon.innerHTML = '<img width="30px" src="./check.png" alt="Check">'; // Changed to check icon
            copyIcon.title = 'Password Copied';
          copyIcon.innerHTML='check'
            setTimeout(() => {
                // copyIcon.innerHTML = '<img width="30px" src="./copy.png" alt="Copy">'; // Restore copy icon
                copyIcon.innerHTML='<img width="30px" src="./copy.png">'
                copyIcon.title = '';
            }, 2000);
        })
    } 
});
