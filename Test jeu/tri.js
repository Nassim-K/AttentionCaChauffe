let points = 0;

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    // Check if the dropped element matches the correct bin
    if (event.target.classList.contains("trash-can") && event.target.id === `${data}-bin`) {
        points += 10;
        updatePoints();
        // Remove the dragged element from the draggable area
        draggedElement.style.display = "none";
    }
}

function updatePoints() {
    document.getElementById('points').innerText = `Points: ${points}`;
}

// Add event
