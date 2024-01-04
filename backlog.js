document.addEventListener('DOMContentLoaded', function () {
    // Mock data for current bets (in a real application, this would come from a server)
    var currentBets = [
        { creator: 'Alice', odds: '2:1', betType: 'moneyline', amount: 100, payout: 200 },
        { creator: 'Bob', odds: '3:2', betType: 'over_under', amount: 150, payout: 225 }
    ];

    // Function to handle joining a group
    function joinGroup() {
        var groupCode = document.getElementById('group-code').value;
        console.log("Joining group with code: " + groupCode);
        // In a real application, you would send this data to a server and handle the response
    }

    // Function to handle creating a bet
    function createBet() {
        var betData = {
            creator: document.getElementById('bet-creator').value,
            odds: document.getElementById('odds').value,
            betType: document.getElementById('bet-type').value,
            amount: document.getElementById('amount-put-down').value,
            payout: document.getElementById('payout').value
        };
        console.log("Creating bet: ", betData);
        currentBets.push(betData); // Adding the new bet to the mock data
        updateCurrentBets(); // Update the display of current bets
        // In a real application, you would send this data to a server
    }

    // Function to update current bets display
    function updateCurrentBets() {
        var betsContainer = document.getElementById('current-bets');
        betsContainer.innerHTML = ''; // Clear current content
        currentBets.forEach(function(bet) {
            var betDiv = document.createElement('div');
            betDiv.textContent = `Creator: ${bet.creator}, Odds: ${bet.odds}, Type: ${bet.betType}, Amount: $${bet.amount}, Payout: $${bet.payout}`;
            betsContainer.appendChild(betDiv);
        });
    }

    // Event listeners for form submissions
    document.getElementById('join-group-form').addEventListener('submit', function (e) {
        e.preventDefault();
        joinGroup();
    });

    document.getElementById('create-bet-form').addEventListener('submit', function (e) {
        e.preventDefault();
        createBet();
    });

    // Initialize the display of current bets
    updateCurrentBets();
});


