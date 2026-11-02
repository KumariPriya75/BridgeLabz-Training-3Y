const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - message.value.length;
    counter.textContent = remaining + " characters remaining";
    counter.className = "";

    if (remaining <= 0) {
        counter.classList.add("red");
    } else if (remaining <= 20) {
        counter.classList.add("yellow");
    }
}

message.addEventListener("input", updateCounter);

// preventDefault blocks additional printable input once the limit is reached.
message.addEventListener("keydown", function (event) {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"];
    if (message.value.length >= maximumCharacters &&
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey || event.metaKey)) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function () {
    message.value = "";
    updateCounter();
});

updateCounter();
