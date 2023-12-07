let points = 0;

function completeChallenge() {
    // Simulated function to complete a challenge
    points += 10;
    updatePoints();
    nextChallenge();
}

function nextChallenge() {
    // Simulated function to set the next challenge
    document.getElementById('challenge-text').innerText = "Nouveau défi: [Nouvelle description]";
}

function updatePoints() {
    document.getElementById('points').innerText = `Points: ${points}`;
}
