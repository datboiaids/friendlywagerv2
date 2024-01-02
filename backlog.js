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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBetButton').addEventListener('click', submitBet);
    document.getElementById('betType').addEventListener('change', toggleBetOptions);
});

function submitBet() {
    const betData = {
        betName: document.getElementById('betName').value,
        betType: document.getElementById('betType').value,
        overUnderChoice: document.getElementById('overUnderChoice').value,
        odds: parseFloat(document.getElementById('odds').value),
        money: parseFloat(document.getElementById('money').value),
    };

    fetch('/submit-bet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(betData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        addBetToList(data);
        clearForm();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function addBetToList(betData) {
    // existing logic from createBetItem, modified to use betData
    // ...
}

// ... keep the rest of the functions (createBetItem, calculatePayout, clearForm, toggleBetOptions) as they are

document.addEventListener('DOMContentLoaded', function() {
    const createGroupForm = document.getElementById('createGroupForm');
    const joinGroupForm = document.getElementById('joinGroupForm');

    createGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitGroupForm('/create-group', {
            creatorName: document.getElementById('creatorName').value,
            groupName: document.getElementById('newGroupName').value,
            groupPassword: document.getElementById('newGroupPassword').value
        });
    });

    joinGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitGroupForm('/join-group', {
            joinerName: document.getElementById('joinerName').value,
            groupName: document.getElementById('groupName').value,
            groupPassword: document.getElementById('groupPassword').value
        });
    });
});

function submitGroupForm(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., update UI or redirect)
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors
    });
}

