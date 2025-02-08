document.getElementById("plantSelect").addEventListener("change", function() {
    const plant = this.value;
    const soilType = document.getElementById("soilType");
    const waterSchedule = document.getElementById("waterSchedule");
    const funFact = document.getElementById("funFact");

    const plantData = {
        succulent: {
            soil: "Well-draining cactus soil.",
            water: "Water once every two weeks.",
            fact: "Succulents store water in their leaves!"
        },
        rose: {
            soil: "Loamy soil with good drainage.",
            water: "Water every 2-3 days.",
            fact: "Roses have been around for over 35 million years!"
        },
        orchid: {
            soil: "Bark-based orchid mix.",
            water: "Water once a week.",
            fact: "Orchids can live for decades if cared for properly!"
        }
    };

    if (plantData[plant]) {
        soilType.textContent = "Soil Type: " + plantData[plant].soil;
        waterSchedule.textContent = "Watering: " + plantData[plant].water;
        funFact.textContent = "Fun Fact: " + plantData[plant].fact;
    } else {
        soilType.textContent = "";
        waterSchedule.textContent = "";
        funFact.textContent = "";
    }
});

document.getElementById("waterReminder").addEventListener("click", function() {
    alert("Don't forget to water your plant!");
});
// Check if notifications are allowed
if (Notification.permission === "default") {
    Notification.requestPermission();
}

document.getElementById("waterReminder").addEventListener("click", function() {
    if (Notification.permission === "granted") {
        new Notification("💧 Time to water your plant!", {
            body: "Stay consistent to keep your plant healthy!",
            icon: "cute-character.png"
        });
    } else {
        alert("Enable notifications to receive watering reminders!");
    }
});
const funFacts = [
    "Plants release oxygen and purify the air!",
    "Some plants can recognize their siblings!",
    "Bananas are actually classified as herbs!",
    "Aloe Vera can survive for months without water!"
];

function showRandomFunFact() {
    const funFact = document.getElementById("funFact");
    funFact.textContent = "Fun Fact: " + funFacts[Math.floor(Math.random() * funFacts.length)];
    funFact.style.animation = "fadeIn 0.5s ease-in-out";
}

// Show a new fun fact every 10 seconds
setInterval(showRandomFunFact, 10000);
const reminderButton = document.getElementById("waterReminder");

// Add sound effect
const dingSound = new Audio("ding.mp3");

reminderButton.addEventListener("click", function() {
    if (Notification.permission === "granted") {
        new Notification("💧 Time to water your plant!", {
            body: "Stay consistent to keep your plant healthy!",
            icon: "cute-character.png"
        });
        dingSound.play(); // Play sound when notification appears
    } else {
        alert("Enable notifications to receive watering reminders!");
    }
});
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");

    // Save user preference
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load user preference on page refresh
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
}
