// JavaScript to hide the loading screen after a delay
window.addEventListener("load", function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 500); // Adjust this delay to control how long the loading screen stays visible
    }, 1000); // Adjust this delay to control how long the loading screen stays visible initially
});

/*loader screen*/
window.addEventListener("load", function () {
    setTimeout(function () {
        var loadingScreen = document.querySelector(".loading-screen");
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
            loadingScreen.style.display = "none";
            
        }, 500);
    }, 2000); // Simulate a 2-second loading process; adjust as needed
});

// Get the elements by their IDs
const waterElement = document.getElementById("water");
const percentageElement = document.getElementById("percentage");
const addWaterButton = document.getElementById("addWater");
const container = document.querySelector(".container");

// Initialize the water level and percentage
let waterLevel = 0; // 
let percentage = 0;
let isComplete = false;

// Function to update the percentage display
function updatePercentage() {
    percentage = (waterLevel / 200) * 100; // Assuming the bottle's height is 200px
    percentageElement.textContent = `${percentage.toFixed(1)}%`;

    if (percentage >= 100 && !isComplete) {
        isComplete = true;
        congratulationsMessage();
    }
}

// Function to display the congratulations message and trigger the celebration
function congratulationsMessage() {
    const messageContainer = document.createElement("div");
    messageContainer.className = "congratulations";
    messageContainer.textContent = "Congratulations! You've reached 100% of your target.";

    container.appendChild(messageContainer);

    // Create and display party poppers
    const poppers = createPartyPoppers(5); // Create 5 party poppers
    poppers.forEach(popper => {
        container.appendChild(popper);
        setTimeout(() => {
            container.removeChild(popper);
        }, 1000); // Remove the party popper elements after 1 second
    });
}

// Function to create party poppers
function createPartyPoppers(count) {
    const poppers = [];
    for (let i = 0; i < count; i++) {
        const popper = document.createElement("div");
        popper.className = "party-popper";
        popper.style.left = `${Math.random() * 90 + 5}%`; // Random horizontal position
        poppers.push(popper);
    }
    return poppers;
}

// Add an event listener to the button
addWaterButton.addEventListener("click", function() {
    if (!isComplete) {
        // Increase the water level by 20 pixels each time the button is clicked
        waterLevel += 20;

        // Ensure the water level does not exceed the bottle's height
        waterLevel = Math.min(waterLevel, 200);

        // Set the new water level and update the percentage display
        waterElement.style.height = `${waterLevel}px`;
        updatePercentage();
    }
});

// Get the reset button by its ID
const resetButton = document.getElementById("reset");

// Add an event listener to the reset button
resetButton.addEventListener("click", function() {
    // Reset the water level and percentage
    waterLevel = 0;
    percentage = 0;
    isComplete = false;
    function congratulationsMessage() {
        const messageContainer = document.createElement("div");
        messageContainer.className = "congratulations";
        messageContainer.textContent = "Congratulations! You've reached 100%.";
    
        // Append the message below the sections
        document.body.appendChild(messageContainer);
    
        // Create and display party poppers
        const poppers = createPartyPoppers(5);
        poppers.forEach(popper => {
            document.body.appendChild(popper);
            setTimeout(() => {
                document.body.removeChild(popper);
            }, 1000);
        });
    }

    // Reset the bottle's water level
    waterElement.style.height = `${waterLevel}px`;
    

    // Reset the percentage display
    percentageElement.textContent = `${percentage.toFixed(1)}%`;    
    
});

// Get the timer elements by their IDs
const timerInput = document.getElementById("timer-input");
const startTimerButton = document.getElementById("start-timer");
const resetTimerButton = document.getElementById("reset-timer");
const timerElement = document.getElementById("timer");

let timerInterval;
let timerRunning = false;
let remainingTime = 0;

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startTimerButton.addEventListener("click", function() {
    if (!timerRunning) {
        const inputTime = parseInt(timerInput.value, 10) * 60; // Convert minutes to seconds
        if (!isNaN(inputTime) && inputTime > 0) {
            remainingTime = inputTime;
            timerInterval = setInterval(() => {
                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                    timerRunning = false;
                    updateTimerDisplay();
                } else {
                    remainingTime--;
                    updateTimerDisplay();
                }
            }, 1000);
            timerRunning = true;
        }
    }
});

resetTimerButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerRunning = false;
    remainingTime = 0;
    updateTimerDisplay();
});

const menuIcon = document.querySelector('.menu-icon');
        const nav = document.querySelector('.nav');

        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuIcon.classList.toggle('active');
});


/*for score box*/
let userScore = 0;
function addTask() {
    const newTaskText = document.getElementById("newTask").value;
    if (newTaskText.trim() !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" onclick="updateScore(this)">
            <label>${newTaskText}</label>
            <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(listItem);
        document.getElementById("newTask").value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function updateScore(checkbox) {
    if (checkbox.checked) {
        userScore += 10;
        document.getElementById("userScore").textContent = userScore;
        if (userScore >= 50) {
            redirectToRandomGameSite();
        }
    } else {
        userScore -= 10;
    }
    document.getElementById("userScore").textContent = userScore;
}
function redirectToRandomGameSite() {
    const gameSites = [
        "https://example-gaming-site-1.com",
        "https://example-gaming-site-2.com",
        "https://example-gaming-site-3.com",
        // Add more gaming site URLs here
    ];

    const randomIndex = Math.floor(Math.random() * gameSites.length);
    const randomGameSite = gameSites[randomIndex];

    // Redirect the user to the random gaming site
    window.location.href = randomGameSite;
}





