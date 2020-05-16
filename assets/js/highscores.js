const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const clear = document.getElementById('clear');

if(highScores.length != 0) {
highScoresList.innerHTML = highScores
    .map( score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join("");
} else {
    highScoresList.innerHTML = `<li class="high-score">There is no score yet.</li>`;
    console.log(highScoresList.innerHTML);
}

if (localStorage.length != 0) {
    // Clear Local Storage
    clear.addEventListener('click', function() {
        localStorage.clear()
        // Refreshes page content
        while (highScoresList.firstChild) {
            highScoresList.removeChild(highScoresList.firstChild)
        }
        highScoresList.innerHTML = `<li class="high-score">There is no score yet.</li>`;
        // Hides the 'Clear Scores' button
        clear.style.display = "none";
    });
} else {
    clear.style.display = "none";
}
