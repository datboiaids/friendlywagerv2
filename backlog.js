document.getElementById('submitBetButton').addEventListener('click', function() {
    const betName = document.getElementById('betName').value;
    const betType = document.getElementById('betType').value;
    const spread = betType === 'spread' ? document.getElementById('spread').value : 'N/A';
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);
    const payout = calculatePayout(odds, money);

    const betItem = document.createElement('li');
    betItem.innerHTML = `${betName} (${betType.toUpperCase()}${spread !== 'N/A' ? ', Spread: ' + spread : ''}) | Odds: ${odds}, Bet: $${money}, Potential Payout: $${payout}
                         <button onclick="betOver('${betName}')">Over</button>
                         <button onclick="betUnder('${betName}')">Under</button>`;
    document.getElementById('activeBetsList').appendChild(betItem);
    clearForm();
});

function calculatePayout(odds, money) {
    let payout = odds < 0 ? (money / Math.abs(odds)) * 100 : (odds / 100) * money;
    return payout.toFixed(2);
}

function betOver(betName) {
    console.log("Over bet placed on: " + betName);
    // Additional logic for Over bet
}

function betUnder(betName) {
    console.log("Under bet placed on: " + betName);
    // Additional logic for Under bet
}

function toggleSpreadInput() {
    const betType = document.getElementById('betType').value;
    const spreadInput = document.getElementById('spread');
    spreadInput.style.display = betType === 'spread' ? 'block' : 'none';
}

function clearForm() {
    document.getElementById('betName').value = '';
    document.getElementById('betType').value = 'moneyline';
    document.getElementById('spread').value = '';
    document.getElementById('spread').style.display = 'none';
    document.getElementById('odds').value = '';
    document.getElementById('money').value = '';
}

// Additional JavaScript logic and functions can be added as needed.
