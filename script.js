// Revised script.js with Fixed Payout Calculation

function calculatePayout(wageredAmount, odds) {
    // Assuming the odds are in the format "x:y"
    const [numerator, denominator] = odds.split(':').map(Number);
    if (!numerator || !denominator || wageredAmount <= 0) return 0;
    return (wageredAmount * (numerator / denominator)) + wageredAmount;
}

function displayBet(bet) {
    const betContainer = document.getElementById('betsContainer');
    const betElement = document.createElement('div');
    betElement.className = 'bet';
    betElement.innerHTML = `<strong>${bet.name}</strong> - Amount: $${bet.amount}, Odds: ${bet.odds}, Potential Payout: $${bet.payout.toFixed(2)}`;
    betContainer.appendChild(betElement);
}

document.getElementById('createBetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const betName = document.getElementById('betName').value;
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value);
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    const newBet = { name: betName, amount: wageredAmount, odds: betOdds, payout: potentialPayout };
    displayBet(newBet);
    document.getElementById('createBetForm').reset();
});

document.getElementById('wageredAmount').addEventListener('input', updatePotentialPayout);
document.getElementById('betOdds').addEventListener('input', updatePotentialPayout);

function updatePotentialPayout() {
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    document.getElementById('potentialPayout').value = isNaN(potentialPayout) ? '0.00' : potentialPayout.toFixed(2);
}

