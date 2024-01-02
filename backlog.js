document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBetButton').addEventListener('click', submitBet);
    document.getElementById('betType').addEventListener('change', toggleBetOptions);
});

function submitBet() {
    const betItem = createBetItem();
    document.getElementById('activeBetsList').appendChild(betItem);
    clearForm();
}

function createBetItem() {
    const betName = document.getElementById('betName').value;
    const betType = document.getElementById('betType').value;
    const overUnderChoice = betType === 'overUnder' ? document.getElementById('overUnderChoice').value : 'N/A';
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);
    const payout = calculatePayout(odds, money);

    const betItem = document.createElement('li');
    betItem.textContent = `${betName} (${betType.toUpperCase()}${overUnderChoice !== 'N/A' ? ', ' + overUnderChoice : ''}) | Odds: ${odds}, Bet: $${money}, Potential Payout: $${payout}`;
    
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
    document.getElementById('overUnderChoice').style.display = 'none';
    document.getElementById('odds').value = '';
    document.getElementById('money').value = '';
}

function toggleBetOptions() {
    const betType = document.getElementById('betType').value;
    const overUnderSelect = document.getElementById('overUnderChoice');
    overUnderSelect.style.display = betType === 'overUnder' ? 'block' : 'none';
}
