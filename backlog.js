document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for home page
    document.getElementById('joinGroupButton').addEventListener('click', () => togglePopup('joinGroupPopup'));
    document.getElementById('createGroupButton').addEventListener('click', () => togglePopup('createGroupPopup'));
    document.getElementById('continueGuestButton').addEventListener('click', () => showBetPage());

    // Event listeners for bet input page
    document.getElementById('submitBetButton').addEventListener('click', submitBet);
});

function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function showBetPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('betInputPage').style.display = 'block';
}

function submitBet() {
    const betName = document.getElementById('betName').value;
    const betType = document.getElementById('betType').value;
    const odds = parseFloat(document.getElementById('odds').value);
    const money = parseFloat(document.getElementById('money').value);
    const payout = calculatePayout(odds, money);

    const betItem = createBetItem(betName, betType, odds, money, payout);
    document.getElementById('activeBetsList').appendChild(betItem);
    clearForm();
}

function calculatePayout(odds, money) {
    // Payout calculation logic
}

function createBetItem(betName, betType, odds, money, payout) {
    // Create and return bet item element
}

function clearForm() {
    // Clear the bet form fields
}

// Additional functions for group joining/creating if needed
