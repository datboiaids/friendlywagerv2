document.getElementById('submitBetButton').addEventListener('click', function() {
    const eventName = document.getElementById('eventName').value;
    const prediction = document.getElementById('prediction').value;
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);
    const payout = calculatePayout(odds, money);

    const betItem = document.createElement('li');
    betItem.innerHTML = `${eventName}: ${prediction} | Odds: ${odds}, Bet: $${money}, Potential Payout: $${payout}
                         <button onclick="betOver('${eventName}')">Over</button>
                         <button onclick="betUnder('${eventName}')">Under</button>`;
    document.getElementById('activeBetsList').appendChild(betItem);
    clearForm();
});

function calculatePayout(odds, money) {
    if (odds < 0) {
        return (money / Math.abs(odds)) * 100;
    } else {
        return (odds / 100) * money;
    }
}

function betOver(eventName) {
    console.log("Over bet placed on: " + eventName);
}

function betUnder(eventName) {
    console.log("Under bet placed on: " + eventName);
}

function clearForm() {
    document.getElementById('eventName').value = '';
    document.getElementById('prediction').value = '';
    document.getElementById('odds').value = '';
    document.getElementById('money').value = '';
}
