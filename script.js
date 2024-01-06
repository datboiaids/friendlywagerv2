document.addEventListener('DOMContentLoaded', function () {
    var currentBets = [];

    function joinGroup() {
        var groupCode = document.getElementById('group-code').value;
        console.log("Joining group with code: " + groupCode);
        // In a real application, this would interact with a server.
    }

    function createBet() {
        var betData = {
            name: document.getElementById('bet-name').value,
            amount: document.getElementById('amount-put-down').value,
            odds: document.getElementById('odds').value,
            betType: document.getElementById('bet-type').value,
            overUnderSelection: document.getElementById('bet-type').value === 'over_under' ? document.getElementById('over-under-selection').value : null,
            creator: document.getElementById('bet-creator').value,
            payout: document.getElementById('payout').value
        };
        console.log("Creating bet: ", betData);
        currentBets.push(betData);
        updateCurrentBets();
        // In a real application, this would send data to a server.
    }

    function updateCurrentBets() {
        var betsContainer = document.getElementById('current-bets');
        betsContainer.innerHTML = '';
        currentBets.forEach(function(bet) {
            var betDiv = document.createElement('div');
            betDiv.textContent = `Name: ${bet.name}, Amount: $${bet.amount}, Odds: ${bet.odds}, Type: ${bet.betType}, Over/Under: ${bet.overUnderSelection}, Creator: ${bet.creator}, Payout: $${bet.payout}`;
            betsContainer.appendChild(betDiv);
        });
    }

    function toggleOverUnderInput() {
        var betType = document.getElementById('bet-type').value;
        var overUnderInput = document.getElementById('over-under-input');
        overUnderInput.style.display = betType === 'over_under' ? 'block' : 'none';
    }

    document.getElementById('join-group-form').addEventListener('submit', function (e) {
        e.preventDefault();
        joinGroup();
    });

    document.getElementById('create-bet-form').addEventListener('submit', function (e) {
        e.preventDefault();
        createBet();
        e.target.reset();
        toggleOverUnderInput();
    });

    toggleOverUnderInput();
});

// Get the modal
var modal = document.getElementById("joinGroupModal");

// Get the button that opens the modal
var btn = document.getElementById("joinGroupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function removeBet(betId) {
    var betToRemove = document.getElementById(betId);
    if (betToRemove) {
        betToRemove.remove();
    }
}

function addBetToDisplay(betData, betId) {
    var betsList = document.getElementById('bets-list').getElementsByTagName('tbody')[0];
    
    var row = betsList.insertRow();
    row.setAttribute('id', 'bet_' + betId);

    row.innerHTML = `
        <td>${betData.name}</td>
        <td>$${betData.amount}</td>
        <td>${betData.odds}</td>
        <td>${betData.betType}</td>
        <td>${betData.overUnderSelection || ''}</td>
        <td>${betData.creator}</td>
        <td>$${betData.payout}</td>
        <td><span class="bet-close" onclick="removeBet('bet_${betId}')">&times;</span></td>
    `;
}

function removeBet(betId) {
    var betToRemove = document.getElementById(betId);
    if (betToRemove) {
        betToRemove.parentNode.removeChild(betToRemove);
    }
}

function addBetToDisplay(betData) {
    var betsList = document.getElementById('bets-list').getElementsByTagName('tbody')[0];
    var row = betsList.insertRow(-1); // Inserts a row at the end

    // Ensuring each cell is created and filled just like the example bet
    var cellName = row.insertCell(0);
    cellName.textContent = betData.name;

    var cellAmount = row.insertCell(1);
    cellAmount.textContent = `$${betData.amount}`;

    var cellOdds = row.insertCell(2);
    cellOdds.textContent = betData.odds;

    var cellType = row.insertCell(3);
    cellType.textContent = betData.betType;

    var cellOverUnder = row.insertCell(4);
    cellOverUnder.textContent = betData.overUnderSelection || '-';

    var cellCreator = row.insertCell(5);
    cellCreator.textContent = betData.creator;

    var cellPayout = row.insertCell(6);
    cellPayout.textContent = `$${betData.payout}`;

    var cellAction = row.insertCell(7);
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("bet-close");
    closeButton.onclick = function() { row.remove(); };
    cellAction.appendChild(closeButton);
}

document.getElementById('create-bet-form').onsubmit = function(e) {
    e.preventDefault();
    // Gather data from the form
    var betData = {
        name: document.getElementById('bet-name').value,
        amount: document.getElementById('amount-put-down').value,
        odds: document.getElementById('odds').value,
        betType: document.getElementById('bet-type').value,
        overUnderSelection: document.getElementById('bet-type').value === 'over_under' ? document.getElementById('over-under-selection').value : null,
        creator: document.getElementById('bet-creator').value,
        payout: document.getElementById('payout').value
    };

    // Add the bet to the table
    addBetToDisplay(betData);

    // Reset the form or perform other necessary actions
};


// Ensure this function is called with the right data when a user submits a bet

function removeBet(betId) {
    var betToRemove = document.getElementById(betId);
    if (betToRemove) {
        betToRemove.remove();
    }
}

// Example of adding a bet
// This is just for demonstration; you should replace this with your actual bet submission logic
addBetToDisplay({
    name: "Sample Bet",
    amount: 100,
    odds: "+200",
    betType: "Moneyline",
    overUnderSelection: "Over",
    creator: "User123",
    payout: 300
}, new Date().getTime()); // Using timestamp as a unique ID for demonstration


