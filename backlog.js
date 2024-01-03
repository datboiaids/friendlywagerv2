document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signInOption');
    const createAccountBtn = document.getElementById('createAccountOption');
    const continueGuestBtn = document.getElementById('guestOption');

    signInBtn.addEventListener('click', () => {
        transitionToForm('signInForm');
    });

    createAccountBtn.addEventListener('click', () => {
        transitionToForm('signUpForm');
    });

    continueGuestBtn.addEventListener('click', () => {
        // Redirect to guest page or perform guest login
    });
});

function transitionToForm(formId) {
    // Logic to fade out other options and display the chosen form
    const forms = document.getElementsByClassName('formContainer');
    for (let form of forms) {
        if (form.id !== formId) {
            form.style.display = 'none';
        }
    }
    const selectedForm = document.getElementById(formId);
    selectedForm.style.opacity = 0;
    selectedForm.style.display = 'block';

    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            selectedForm.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}


