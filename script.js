// Updated script.js for "Friendly Wager"

function calculatePayout(wageredAmount, odds) {
    if (odds > 0) {
        return wageredAmount * (odds / 100) + wageredAmount;
    } else if (odds < 0) {
        return wageredAmount * (100 / Math.abs(odds)) + wageredAmount;
    }
    return 0;
}

function displayBet(bet) {
    const betContainer = document.getElementById('betsContainer');
    const betElement = document.createElement('div');
    betElement.className = 'bet';
    betElement.innerHTML = `<strong>${bet.name}</strong> - Amount: $${bet.amount}, Odds: ${bet.odds}, Potential Payout: $${bet.payout.toFixed(2)}`;
    betContainer.appendChild(betElement);
}

function updatePotentialPayout() {
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = parseInt(document.getElementById('betOdds').value, 10);
    const potentialPayout = calculatePayout(wageredAmount, betOdds);
    document.getElementById('potentialPayout').value = isNaN(potentialPayout) ? '' : potentialPayout.toFixed(2);
}

document.getElementById('createBetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const betName = document.getElementById('betName').value;
    const wageredAmount = parseFloat(document.getElementById('wageredAmount').value || 0);
    const betOdds = document.getElementById('betOdds').value;
    const potentialPayout = calculatePayout(wageredAmount, betOdds);

    if (betName && wageredAmount > 0 && betOdds) {
        const newBet = { name: betName, amount: wageredAmount, odds: betOdds, payout: potentialPayout };
        displayBet(newBet);
        document.getElementById('createBetForm').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

document.getElementById('wageredAmount').addEventListener('input', updatePotentialPayout);
document.getElementById('betOdds').addEventListener('input', updatePotentialPayout);

// Node.js backend script for Group Creation and Joining

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Group = require('./models/Group'); // MongoDB model for Group

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/friendlyWager', { useNewUrlParser: true, useUnifiedTopology: true });

// Group Schema (assuming Group model is defined in ./models/Group)
// Example: const groupSchema = new mongoose.Schema({ name: String, members: [String] });

// Create a new group
app.post('/api/groups/create', async (req, res) => {
    const { name, creator } = req.body;
    const newGroup = new Group({ name, members: [creator] });
    
    try {
        await newGroup.save();
        res.status(201).send({ message: "Group created successfully", groupId: newGroup._id });
    } catch (error) {
        res.status(500).send({ message: "Error creating group", error });
    }
});

// Join an existing group
app.post('/api/groups/join', async (req, res) => {
    const { groupId, userId } = req.body;

    try {
        const group = await Group.findById(groupId);
        if (!group.members.includes(userId)) {
            group.members.push(userId);
            await group.save();
            res.status(200).send({ message: "Joined group successfully" });
        } else {
            res.status(400).send({ message: "User already in group" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error joining group", error });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
