function setDate() {
    // const time
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // degree rotations 
    var secondDegrees = seconds * 3 + 90;
    var minDegrees = minutes * 6 + seconds / 10 + 90
    var hourDegrees = hours * 30 + minutes / 2 + 90;

    // clock elements
    var secondHand = document.querySelector('.second-hand');
    var minuteHand = document.querySelector('.minute-hand');
    var hourHand = document.querySelector('.hour-hand');

    // transform
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(setDate, 1000);