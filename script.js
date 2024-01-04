// Mock data for current bets (in a real application, this would come from a server)
var currentBets = [];

// Function to handle joining a group
function joinGroup() {
    var groupCode = document.getElementById('group-code').value;
    console.log("Joining group with code: " + groupCode);
    // In a real application, you would send this data to a server
}

// Function to handle creating a bet
function createBet() {
    var betData = {
        name: document.getElementById('bet-name').value,
        amount: document.getElementById('amount-put-down').value,
        odds: document.getElementById('odds').value,
        betType: document.getElementById('bet-type').value,
        overUnderSelection: document.getElementById('bet-type').value === 'over_under' ? document.getElementById('over-under-selection').value : null,
        creator: document.getElementById('bet-creator').value,
        payout: document.getElementById('payout').value
    };
    console.log("Creating bet: ", betData);
    currentBets.push(betData);
    updateCurrentBets();
    // In a real application, you would send this data to a server
}

// Function to update current bets display
function updateCurrentBets() {
    var betsContainer = document.getElementById('current-bets');
    betsContainer.innerHTML = ''; // Clear current content
    currentBets.forEach(function(bet) {
        var betDiv = document.createElement('div');
        betDiv.textContent = `Name: ${bet.name}, Amount: $${bet.amount}, Odds: ${bet.odds}, Type: ${bet.betType}, Over/Under: ${bet.overUnderSelection}, Creator: ${bet.creator}, Payout: $${bet.payout}`;
        betsContainer.appendChild(betDiv);
    });
}

// Function for toggling Over/Under input visibility
function toggleOverUnderInput() {
    var betType = document.getElementById('bet-type').value;
    var overUnderInput = document.getElementById('over-under-input');
    overUnderInput.style.display = betType === 'over_under' ? 'block' : 'none';
}

// Event listeners for form submissions
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('join-group-form').addEventListener('submit', function (e) {
        e.preventDefault();
        joinGroup();
    });

    document.getElementById('create-bet-form').addEventListener('submit', function (e) {
        e.preventDefault();
        createBet();
    });

    // Initialize the toggle state for over/under input
    toggleOverUnderInput();
});


