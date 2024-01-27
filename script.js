// File: script.js - Comprehensive Rewrite for "Friendly Wager"

// Function to calculate the potential payout
function calculatePayout(wageredAmount, odds) {
    const oddsFraction = odds.split(':');
    return wageredAmount * (parseFloat(oddsFraction[0]) / parseFloat(oddsFraction[1])) + wageredAmount;
}

// Function to display a bet in the bets container
function displayBet(bet) {
    const betContainer = document.getElementById('betsContainer');
    const betElement = document.createElement('div');
    betElement.className = 'bet';
    betElement.innerHTML = `<strong>${bet.name}</strong> - Amount: $${bet.amount}, Odds: ${bet.odds}, Potential Payout: $${bet.payout.toFixed(2)}`;
    betContainer.appendChild(betElement);
}

// Function to update the potential payout field
function updatePayoutField() {
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value);
    const betOdds = document.getElementById('betOdds').value;
    
    if (wageredAmount > 0 && betOdds) {
        const potentialPayout = calculatePayout(wageredAmount, betOdds);
        document.getElementById('potentialPayout').value = potentialPayout.toFixed(2);
    } else {
        document.getElementById('potentialPayout').value = '';
    }
}

// Event listener for input change on wagered amount and odds
document.getElementById('wageredAmount').addEventListener('input', updatePayoutField);
document.getElementById('betOdds').addEventListener('input', updatePayoutField);

// Event listener for bet form submission
document.getElementById('createBetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const betName = document.getElementById('betName').value;
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value);
    const betOdds = document.getElementById('betOdds').value;

    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    const newBet = {
        name: betName,
        amount: wageredAmount,
        odds: betOdds,
        payout: potentialPayout
    };

    displayBet(newBet);
    document.getElementById('createBetForm').reset();
});

