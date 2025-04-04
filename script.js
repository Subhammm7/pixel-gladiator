const questions = [
    { question: "5 + 3 * 2?", answer: "11" },
    { question: "Divide 30 by half and add 10.", answer: "70" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "A plane crashes on the border of USA and Canada. Where do they bury the survivors?", answer: "they don't" },
    { question: "How many months have 28 days?", answer: "12" },
    { question: "What has hands but can’t clap?", answer: "clock" },
    { question: "What has a head, a tail, but no body?", answer: "coin" },
    { question: "The more you take, the more you leave behind. What are they?", answer: "footsteps" },
    { question: "I am tall when I am young, and short when I am old. What am I?", answer: "candle" },
    { question: "I am an odd number. Take away one letter, and I become even. What am I?", answer: "seven" },
    { question: "Which weighs more: a pound of feathers or a pound of bricks?", answer: "same" },
    { question: "If you pass the person in second place, what place are you in?", answer: "second" },
    { question: "If you drop a red stone into the blue sea, what will it become?", answer: "wet" },
    { question: "You see a boat filled with people. It hasn’t sunk, but when you look again, you don’t see a single person. Why?", answer: "all married" },
    { question: "What can travel around the world while staying in the same spot?", answer: "stamp" },
    { question: "David’s parents have three sons: Snap, Crackle, and?", answer: "david" },
    { question: "The more you take, the more you leave behind. What are they?", answer: "footsteps" }
];

let currentRound = 1;
let p1Health = 3;
let p2Health = 3;
let currentQuestion = {};
let currentTurn = 1;

function loadQuestion() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("questionText").innerText = currentQuestion.question;
}

function checkAnswer() {
    let answer = document.getElementById("answerInput").value.toLowerCase().trim();

    if (answer === currentQuestion.answer) {
        alert("✅ Correct! Next player's turn.");
    } else {
        alert("❌ Wrong! You lose 1 health.");
        if (currentTurn === 1) {
            p1Health--;
            document.getElementById("p1Health").innerText = p1Health;
        } else {
            p2Health--;
            document.getElementById("p2Health").innerText = p2Health;
        }
    }

    if (p1Health <= 0 || p2Health <= 0) {
        alert(🎉 Game Over! ${p1Health > 0 ? "Player 1" : "Player 2"} wins!);
        updateLeaderboard();
        resetGame();
    } else {
        currentTurn = currentTurn === 1 ? 2 : 1;
        document.getElementById("nextQuestion").style.display = "block";
    }
}

function nextRound() {
    currentRound++;
    document.getElementById("roundNum").innerText = currentRound;
    document.getElementById("nextQuestion").style.display = "none";
    document.getElementById("answerInput").value = "";
    loadQuestion();
}

function resetGame() {
    p1Health = 3;
    p2Health = 3;
    currentRound = 1;
    document.getElementById("p1Health").innerText = p1Health;
    document.getElementById("p2Health").innerText = p2Health;
    document.getElementById("roundNum").innerText = currentRound;
    loadQuestion();
}

function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    const score = Math.floor(Math.random() * 100);
    const li = document.createElement("li");
    li.textContent = Player ${Math.floor(Math.random() * 50)}: ${score} points;
    leaderboard.appendChild(li);
}

document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

loadQuestion();