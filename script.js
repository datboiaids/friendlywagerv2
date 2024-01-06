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


