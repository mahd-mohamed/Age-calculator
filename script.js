function calculateAge() {
    const nameInput = document.getElementById('name');
    const birthDateInput = document.getElementById('birthDate');
    const resultParagraph = document.getElementById('result');

    if (nameInput.value && birthDateInput.value) {
        const birthDate = new Date(birthDateInput.value);

        // Check if birthDate is a valid date
        if (isNaN(birthDate.getTime())) {
            resultParagraph.innerHTML = 'Please enter a valid birthdate.';
            return;
        }

        const today = new Date();

        let ageInMilliseconds = today - birthDate;

        if (ageInMilliseconds < 0) {
            resultParagraph.innerHTML = 'Please enter a valid birthdate.';
            return;
        }

        const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        ageInMilliseconds -= years * (365.25 * 24 * 60 * 60 * 1000);

        const months = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
        ageInMilliseconds -= months * (30.44 * 24 * 60 * 60 * 1000);

        const days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

        resultParagraph.innerHTML = `Welcome, ${nameInput.value}! <img class="icon" src="https://th.bing.com/th/id/OIP.A8d-EeSlSonYXTjFXtKLHAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Calendar"> your age is ${years} years, ${months} months, ${days} days old!`;
    } else {
        resultParagraph.innerHTML = 'Please enter your name and birthdate.';
    }
}
function resetInputs() {
    document.getElementById('name').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('result').innerHTML = '';
}