var modal = document.getElementById("my-modal");
var modalImage = document.getElementById("my-modal-image");
// Opens popup box and displays the clicked on image onto it
function popUp(image) {
    modal.style.display = "flex";
    modalImage.src = image.src;
}
function closePopUp() {
    modal.style.display = "none";
    console.log(1);
}