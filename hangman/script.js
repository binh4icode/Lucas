let wordList = ["javascript", "monkey","minute", "second", "fortnight", "millennium", "calendar", "schedule", "timetable", "duration", "interval", "lifetime", "generation", "eternity", "distance", "direction", "location", "position", "destination", "journey", "voyage", "flight", "cruise", "safari", "history", "science", "language", "literature", "poetry", "philosophy", "psychology", "sociology", "economy", "politics", "industry", "commerce", "business", "company", "factory", "workshop", "laboratory", "hospital", "university", "college", "computer", "monitor", "keyboard", "battery", "scanner", "camera", "tablet", "laptop", "router", "software", "hardware", "database", "network", "internet", "website", "program", "application", "algorithm", "processor", "telephone", "smartphone", "headset", "microphone", "speaker", "amplifier", "projector", "television", "calculator", "compass", "hammer", "wrench", "pliers", "shovel", "bucket", "ladder", "basket", "mirror", "candle", "needle", "screwdriver", "chainsaw", "lawnmower", "wheelbarrow", "paintbrush", "scissors", "tweezers", "thimble", "thread", "toolbox", "jacket", "sweater", "trousers", "sneaker", "sandal", "sleeve", "pocket", "button", "zipper", "wallet", "raincoat", "overcoat", "cardigan", "waistcoat", "necktie", "scarf", "glove", "mitten", "handbag", "backpack", "country", "village", "stadium", "theater", "library", "airport", "station", "market", "castle", "palace", "mansion", "cottage", "bungalow", "apartment", "skyscraper", "monument", "fountain", "statue", "pyramid", "luggage", "suitcase", "briefcase", "umbrella", "parasol", "spectacles", "sunglasses", "goggles", "necklace", "bracelet", "earrings", "handshake", "friendship", "laughter", "happiness","amazing", "pancake"];

let secretWord;
let answerArray = [];
let guessedArray = [];
let remainingLetters;

let letterGuess;
let wordGuess;

let alreadyGuessed = false;
let numGuessesLeft = 10;
let userQuit = false;

const hangmanWordElement = document.getElementById("hangmanWord");
const playerInfoElement = document.getElementById("playerInfo");
const guessesLeftElement = document.getElementById("guessesLeft");
const letterInputElement = document.getElementById("letterGuess");
const wordInputElement = document.getElementById("wordGuess");

setupNewGame();

function handleLetterGuess() {
    letterGuess = letterInputElement.value.toLowerCase().trim();
    letterInputElement.value = "";
    updateGameState();
}

function handleWordGuess() {
    wordGuess = wordInputElement.value.toLowerCase().trim();

    letterInputElement.value = "";
    wordInputElement.value = "";

    if (wordGuess === secretWord) {
        playerInfoElement.innerHTML =
            "Good job! The answer was <b>" +
            secretWord +
            "</b>. - Starting new game...";
    } else {
        playerInfoElement.innerHTML =
            "Sorry, that's incorrect. The answer was <b>" +
            secretWord +
            "</b>. - Starting new game...";
    }

    setTimeout(setupNewGame, 4000);
}

function setupNewGame() {
    playerInfoElement.innerHTML = "Good luck!";
    numGuessesLeft = 10;

    secretWord =
        wordList[Math.floor(Math.random() * wordList.length)];

    answerArray = [];
    guessedArray = [];

    for (let i = 0; i < secretWord.length; i++) {
        answerArray[i] = "_";
    }

    remainingLetters = secretWord.length;

    hangmanWordElement.innerHTML = answerArray.join(" ");
    guessesLeftElement.innerHTML =
        numGuessesLeft + " guesses left.";
}

function updateGameState() {
    if (remainingLetters > 0 && numGuessesLeft > 0) {

        if (letterGuess.length !== 1) {
            playerInfoElement.innerHTML =
                "Please enter a single letter";
        } else {

            alreadyGuessed = false;

            for (let i = 0; i < guessedArray.length; i++) {
                if (letterGuess === guessedArray[i]) {
                    alreadyGuessed = true;
                    playerInfoElement.innerHTML =
                        "That letter was already guessed!";
                }
            }

            if (!alreadyGuessed) {

                numGuessesLeft--;

                guessedArray.push(letterGuess);

                playerInfoElement.innerHTML = "No!";

                for (let j = 0; j < secretWord.length; j++) {

                    if (letterGuess === secretWord[j]) {

                        answerArray[j] = letterGuess;
                        remainingLetters--;

                        playerInfoElement.innerHTML = "Yes!";
                    }
                }

                hangmanWordElement.innerHTML =
                    answerArray.join(" ");

                guessesLeftElement.innerHTML =
                    numGuessesLeft + " guesses left.";
            }
        }
    }




    if (remainingLetters <= 0) {

        playerInfoElement.innerHTML =
            "Good job! The answer was <b>" +
            secretWord +
            "</b>. - Starting new game...";

        setTimeout(setupNewGame, 4000);

    } else if (numGuessesLeft === 0) {

        playerInfoElement.innerHTML =
            "Sorry, you're out of guesses. The answer was <b>" +
            secretWord +
            "</b>. - Starting new game...";

        setTimeout(setupNewGame, 4000);
    }



}