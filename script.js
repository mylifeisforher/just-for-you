const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const responseDiv = document.getElementById("response");

// Function to create hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.top = "50%"; // Start near the middle of the screen
    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// "Yes" button click event
yesBtn.addEventListener("click", () => {
    responseDiv.textContent = "Yayyyyy! You said YESSSSSS! ❤️❤️❤️❤️❤️ I LOVE YOU SOOOOOO MUCH";
    responseDiv.style.color = "#FF69B4";

    // Create multiple hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 200);
    }
});

// "No" button click event
noBtn.addEventListener("click", () => {
    responseDiv.textContent = "you dont love me?😢";
    responseDiv.style.color = "#FF6B6B";

    // Add pleading emojis
    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement("div");
        emoji.textContent = "";
        emoji.style.fontSize = "3rem";
        emoji.style.margin = "0.5rem";
        emoji.style.display = "inline-block";
        emoji.style.animation = "shake 0.5s ease-in-out infinite";
        responseDiv.appendChild(emoji);
    }
});
