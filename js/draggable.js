let dragObj = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

document.addEventListener("mousedown", function(event) {
    let target = event.target;
    while (target != null) {
        if (target.classList.contains("draggable")) {
            dragObj = target;
            dragOffsetX = event.clientX - dragObj.getBoundingClientRect().left;
            dragOffsetY = event.clientY - dragObj.getBoundingClientRect().top;
            break;
        }
        target = target.parentNode;
    }
});

document.addEventListener("mousemove", function(event) {
    if (dragObj == null)
        return;

    // Move the draggable object according to mouse movement
    dragObj.style.left = (event.clientX - dragOffsetX) + "px";
    dragObj.style.top = (event.clientY - dragOffsetY) + "px";
});

document.addEventListener("mouseup", function() {
    dragObj = null; // Reset when mouse button is released
});
