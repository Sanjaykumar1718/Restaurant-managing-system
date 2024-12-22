// script.js

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    alert(`Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been booked.`);
    this.reset();
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = document.getElementById('feedback').value;

    alert('Thank you for your feedback!');
    this.reset();
});
