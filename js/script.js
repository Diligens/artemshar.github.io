console.log('Hello my dear friend! You can get even better.');

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    contentPaddingTop()
};

// Get the header
var content = document.getElementById("content");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function contentPaddingTop() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}