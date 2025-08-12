let homeScore = 0;
let guestScore = 0;

// Function to increase home score
function addHomeScore(points) {
  homeScore += points;
  updateHomeScoreDisplay();
}

// Function to increase guest score
function addGuestScore(points) {
  guestScore += points;
  updateGuestScoreDisplay();
}

// Update home score display
function updateHomeScoreDisplay() {
  const homeScoreElement = document.getElementById('homeScoreDisplay');
  if (homeScoreElement) {
    homeScoreElement.textContent = homeScore;
  }
}

// Update guest score display
function updateGuestScoreDisplay() {
  const guestScoreElement = document.getElementById('guestScoreDisplay');
  if (guestScoreElement) {
    guestScoreElement.textContent = guestScore;
  }
}

// Reset all scores
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  updateHomeScoreDisplay();
  updateGuestScoreDisplay();
}

// Keyboard shortcuts
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    // Home Score Controls
    case '1':
      addHomeScore(1);
      break;
    case '2':
      addHomeScore(2);
      break;
    case '3':
      addHomeScore(3);
      break;

    // Guest Score Controls
    case '7':
      addGuestScore(1);
      break;
    case '8':
      addGuestScore(2);
      break;
    case '9':
      addGuestScore(3);
      break;

    // Reset
    case 'r':
    case 'R':
      resetScores();
      break;
  }
});

// Initialize displays when page loads
document.addEventListener('DOMContentLoaded', function () {
  updateHomeScoreDisplay();
  updateGuestScoreDisplay();
});
