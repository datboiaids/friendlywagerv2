// File: script.js - Complete Rewrite with Automatic Payout Calculation

function calculatePayout(wageredAmount, odds) {
    const oddsFraction = odds.split(':');
    return oddsFraction.length === 2 ? wageredAmount * (parseFloat(oddsFraction[0]) / parseFloat(oddsFraction[1])) + wageredAmount : 0;
}

function displayBet(bet) {
    const betContainer = document.getElementById('betsContainer');
    const betElement = document.createElement('div');
    betElement.className = 'bet';
    betElement.innerHTML = `<strong>${bet.name}</strong> - Amount: $${bet.amount}, Odds: ${bet.odds}, Potential Payout: $${bet.payout.toFixed(2)}`;
    betContainer.appendChild(betElement);
}

function handleBetCreation() {
    const betName = document.getElementById('betName').value;
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);

    if (betName && wageredAmount > 0 && betOdds) {
        const newBet = { name: betName, amount: wageredAmount, odds: betOdds, payout: potentialPayout };
        displayBet(newBet);
        document.getElementById('createBetForm').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

document.getElementById('createBetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleBetCreation();
});

document.getElementById('wageredAmount').addEventListener('input', updatePotentialPayout);
document.getElementById('betOdds').addEventListener('input', updatePotentialPayout);

function updatePotentialPayout() {
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);

    document.getElementById('potentialPayout').value = potentialPayout > 0 ? potentialPayout.toFixed(2) : '';
}

