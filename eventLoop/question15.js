let timeLeft = prompt("Enter seconds to countdown:");

if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    console.log(`Countdown started for ${timeLeft} seconds...`);
    console.log("Press 's' at any time to stop the countdown.");

    let Requested = false;
    document.addEventListener("keydown", (event) => {
        setTimeout(() => {
            if (event.key.toLowerCase() === "s") {
                Requested = true;
            }
        }, 100); 
    });

    const timer = setInterval(() => {

        if (sRequested) {
            clearInterval(timer);
            console.log("Countdown Stopped by User!");
            return;
        }

        console.log(`Time left: ${timeLeft}s`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
        }
    }, 1000);
}
