document.addEventListener('DOMContentLoaded', function() {
    const createGroupForm = document.getElementById('createGroupForm');
    const joinGroupForm = document.getElementById('joinGroupForm');

    createGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm('/create-group', getFormData(createGroupForm), navigateToBetPage);
    });

    joinGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm('/join-group', getFormData(joinGroupForm), navigateToBetPage);
    });
});

function getFormData(form) {
    return Array.from(form.elements).reduce((data, element) => {
        if (element.name) data[element.name] = element.value;
        return data;
    }, {});
}

function submitForm(url, data, callback) {
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
        if (data.success && callback) callback();
    })
    .catch(error => console.error('Error:', error));
}

function navigateToBetPage() {
    window.location.href = '/path-to-bet-page'; // Replace with the actual path
}
// Additional functionality or event listeners can be added here.

// For instance, if you have a bet submission form:
const betForm = document.getElementById('betForm');
if (betForm) {
    betForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm('/submit-bet', getFormData(betForm));
    });
}

// You might have other functions for different interactions on your page.
// For example, a function to update user interface based on certain actions:
function updateUI() {
    // Code to update UI elements
    // This could be showing messages, updating lists, etc.
}

// Similarly, any other specific functionality required by your site can be scripted here.
// Remember to structure your code in a way that is maintainable and easy to understand.


