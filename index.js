const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
let gridSize = 16;

function createGrid() {
  // Clear existing grid
  container.innerHTML = '';

  // Set grid dimensions
  container.style.setProperty('--grid-cols', gridSize);
  container.style.setProperty('--grid-rows', gridSize);

  // Create grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
}

function changeColor(event) {
  const gridItem = event.target;
  gridItem.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetGrid() {
  const newGridSize = parseInt(prompt('Enter the number of squares per side (maximum 100):'));
  if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
    gridSize = newGridSize;
    createGrid();
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

// Create initial grid
createGrid();

// Add event listeners
container.addEventListener('mouseover', changeColor);
resetButton.addEventListener('click', resetGrid);