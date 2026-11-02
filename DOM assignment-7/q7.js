const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", function (event) {
    coordinates.textContent = "clientX: " + event.clientX + " | clientY: " + event.clientY;
});

trackingBox.addEventListener("dblclick", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();
    const redDot = document.createElement("span");
    redDot.className = "red-dot";
    redDot.style.left = (event.clientX - boxPosition.left) + "px";
    redDot.style.top = (event.clientY - boxPosition.top) + "px";
    trackingBox.appendChild(redDot);
});
