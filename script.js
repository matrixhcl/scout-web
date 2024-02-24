

/* "let" keyword defines a variable in javascript,
A variable is like a container that holds information or data. It has a name and a value.
In this case, we are telling the computer that we want to set a variable with name "targetNumber", and its value is zero */
let targetNumber = 0;

// A function is a block of code that can be called and executed at any time
// A reuseable recipe for performing a task
// This function is for generate a random number between 1 and 100
function regenerateNumber() {
    targetNumber = Math.floor(Math.random() * 100);
    targetNumber === 0 ? regenerateNumber() : null;
}
// Here we call the function to generate a random number
regenerateNumber()
// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    // To perform any action on an element, you need to select it with locator first
    // in this case, we are selecting the input field with the id guessInput
    const guessInput = document.getElementById('guessInput');
    if (!guessInput) {
        alert("cannot found the input field");
    }

    // data retrieved from the input field is always a string
    // so we need to convert it to a number before we can perform any mathematical operation on it
    // a string is a sequence of characters e.g. a english word, and a number is a numerical value e.g. 1.233
    const userGuess = parseInt(guessInput.value);

    // Compare the user's guess with the target number
    // if block is used to check if a condition is true
    // only if the condition is true, the code inside the block is executed
    if (userGuess === targetNumber) {
        showResult('Congratulations! You guessed the correct number!');
    } else if (userGuess < targetNumber) {
        showResult('Too low! Try again.');
    } else {
        showResult('Too high! Try again.');
    }

    // Clear the input field
    guessInput.value = '';
}

// Function to display the result message
function showResult(message) {
    const result = document.getElementById('result');
    result.textContent = message;
}

function showSection(sectionId) {
    // get all elements that is a section element
    const sections = document.querySelectorAll('section');
    // a loop to check if the section id is the same as the section id passed in the function
    // if it is, add the class fade-in to the section
    // "looping" simply means doing the same thing over and over again to a list of items
    sections.forEach(section => {
        // here, we check if the section id is the same as the section id passed in the function
        // if it is, add the class fade-in to the section
        // class fade-in is a class that makes the section plays a fade-in animation
        // animation is triggered when a class is added to an element
        if (section.id === sectionId) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });

    // Hide all other sections
    sections.forEach(section => {
        // if the section id is not the same as the section id passed in the function
        // add the class display-none to the section
        // class display-none is a class that hides the section
        if (section.id !== sectionId) {
            section.classList.add('display-none');
        } else {
            section.classList.remove('display-none');
        }
    });
}