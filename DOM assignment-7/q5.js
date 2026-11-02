const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeModal = document.getElementById("closeModal");

gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    largeImage.src = event.target.src.replace("/300/200", "/900/600");
    largeImage.alt = event.target.alt;
    modal.hidden = false;
});

modal.addEventListener("click", function () {
    modal.hidden = true;
});

modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

closeModal.addEventListener("click", function () {
    modal.hidden = true;
});
