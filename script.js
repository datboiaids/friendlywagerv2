// Corrected script.js for Automatic Payout Calculation

function calculatePayout(wageredAmount, odds) {
    const oddsParts = odds.split(':');
    if (oddsParts.length === 2) {
        const oddsNum = parseFloat(oddsParts[0]);
        const oddsDenom = parseFloat(oddsParts[1]);
        return oddsNum && oddsDenom ? wageredAmount * (oddsNum / oddsDenom) + wageredAmount : 0;
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
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    document.getElementById('potentialPayout').value = potentialPayout.toFixed(2);
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

