// Updated script.js for "Friendly Wager"

function calculatePayout(wageredAmount, odds) {
    if (odds > 0) {
        return wageredAmount * (odds / 100) + wageredAmount;
    } else if (odds < 0) {
        return wageredAmount * (100 / Math.abs(odds)) + wageredAmount;
    }
    return 0;
}

function displayBet(bet) {
    const betContainer = document.getElementById('betsContainer');
    const betElement = document.createElement('div');
    betElement.className = 'bet';
    betElement.innerHTML = `<strong>${bet.name}</strong> - Amount: $${bet.amount}, Odds: ${bet.odds}, Potential Payout: $${bet.payout.toFixed(2)}`;
    betContainer.appendChild(betElement);
}

function updatePotentialPayout() {
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = parseInt(document.getElementById('betOdds').value, 10);
    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    document.getElementById('potentialPayout').value = isNaN(potentialPayout) ? '' : potentialPayout.toFixed(2);
}

document.getElementById('createBetForm').addEventListener('submit', function(event) {
    event.preventDefault();
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
});

document.getElementById('wageredAmount').addEventListener('input', updatePotentialPayout);
document.getElementById('betOdds').addEventListener('input', updatePotentialPayout);
