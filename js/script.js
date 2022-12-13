// Create global variables to select the following elements:
const letters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";

// Write a function to add placeholders for each letter 
 const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }

    wordsInProgress.innerText = placeholderLetters.join(""));
 };


button.addEventListener("click", function (e) {
e.preventDefault();
const guess = textInput.value;

console.log(guess);
textInput.value = "";
});

 
