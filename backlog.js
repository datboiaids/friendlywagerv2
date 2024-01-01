// script.js
let activeBets = [];
let results = [];

function submitBet() {
    const eventName = document.getElementById('eventName').value;
    const prediction = document.getElementById('prediction').value;
    const odds = document.getElementById('odds').value;
    const money = document.getElementById('money').value;
    const payout = document.getElementById('payout').value;

    // Add the bet to active bets
    activeBets.push({ eventName, prediction, odds, money, payout });

    updateActiveBetsList();
    clearForm();

    alert('Bet submitted successfully!');
}

function calculatePayout() {
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);

    if (!isNaN(odds) && !isNaN(money)) {
        const payout = (odds * money).toFixed(2);
        document.getElementById('payout').value = `$${payout}`;
    } else {
        document.getElementById('payout').value = '';
    }
}

function updateActiveBetsList() {
    const activeBetsList = document.getElementById('activeBetsList');

    // Clear the existing list
    activeBetsList.innerHTML = '';

    // Add the new bet to the list
    for (const bet of activeBets) {
        const listItem = document.createElement('li');
        listItem.textContent = `${bet.eventName}: ${bet.prediction} (Odds: ${bet.odds}, Money: $${bet.money}, Payout: ${bet.payout})`;
        listItem.style.backgroundColor = '#444';
        listItem.style.border = '1px solid #333';
        listItem.style.padding = '10px';
        listItem.style.marginBottom = '10px';
        listItem.style.borderRadius = '5px';
        activeBetsList.appendChild(listItem);
    }
}

function clearForm() {
    document.getElementById('eventName').value = '';
    document.getElementById('prediction').value = '';
    document.getElementById('odds').value = '';
    document.getElementById('money').value = '';
    document.getElementById('payout').value = '';
}
