let flexBoxesVisible = false;

function toggleFlexBoxes() {
  const flexBoxesContainer = document.getElementById('flexBoxes');
  const exploreButton = document.getElementById('exploreButton');

  if (flexBoxesVisible) {
    flexBoxesContainer.style.display = 'none';
    exploreButton.innerHTML = 'Explore Programs <span>&#10148;</span>';
  } else {
    flexBoxesContainer.innerHTML = '';
    for (let i = 1; i <= 6; i++) {
      const flexBox = document.createElement('div');
      flexBox.className = 'flexBox';
      const heading = document.createElement('h2');
      heading.textContent = 'Heading ' + i;
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Lorem ipsum dolor sit amet.';
      flexBox.appendChild(heading);
      flexBox.appendChild(paragraph);
      flexBoxesContainer.appendChild(flexBox);
    }
    flexBoxesContainer.style.display = 'block';
    exploreButton.innerHTML = 'Explore <span>&#10148;</span>';
  }

  flexBoxesVisible = !flexBoxesVisible;
}