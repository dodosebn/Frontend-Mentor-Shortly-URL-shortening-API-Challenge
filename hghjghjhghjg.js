// Get the button and output container references
const shortenButton = document.getElementById('shortenClick');
const outputContainer = document.querySelector('.link-outputs');

shortenButton.addEventListener('click', () => {
  const clonedContainer = outputContainer.cloneNode(true);
  outputContainer.parentElement.appendChild(clonedContainer);
});