document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBetButton').addEventListener('click', submitBet);
});

function submitBet() {
    const betName = document.getElementById('betName').value;
    const betType = document.getElementById('betType').value;
    const spread = betType === 'spread' ? document.getElementById('spread').value : 'N/A';
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);
    const payout = calculatePayout(odds, money);

    const betItem = createBetItem(betName, betType, spread, odds, money, payout);
    document.getElementById('activeBetsList').appendChild(betItem);
    clearForm();
}

function createBetItem(betName, betType, spread, odds, money, payout) {
    const betItem = document.createElement('li');
    betItem.textContent = `${betName} (${betType.toUpperCase()}${spread !== 'N/A' ? ', Spread: ' + spread : ''}) | Odds: ${odds}, Bet: $${money}, Potential Payout: $${payout}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => betItem.remove());
    betItem.appendChild(deleteButton);

    return betItem;
}

function calculatePayout(odds, money) {
    return odds < 0 ? ((money / Math.abs(odds)) * 100).toFixed(2) : ((odds / 100) * money).toFixed(2);
}

function clearForm() {
    document.getElementById('betName').value = '';
    document.getElementById('betType').value = 'moneyline';
    document.getElementById('spread').value = '';
    document.getElementById('spread').style.display = 'none';
    document.getElementById('odds').value = '';
    document.getElementById('money').value = '';
}

function toggleSpreadInput() {
    const betType = document.getElementById('betType').value;
    document.getElementById('spread').style.display = betType === 'spread' ? 'block' : 'none';
}
