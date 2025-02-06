function animateListItemsSequentially() {
  const listItems = document.querySelectorAll('.sequence-scroll li');
  let delay = 0;
  listItems.forEach(item => {
    item.style.opacity = 0; // Initially hide the items
    setTimeout(() => {
      item.style.opacity = 1; // Make the item visible
      item.classList.add('animate-item'); // Add animation class
    }, delay);
    delay += 300; // Increment delay for each item
  });
}
window.addEventListener('scroll', () => {
	const triggerPoint = window.innerHeight / 1; // Trigger animation when item is fully in viewport
  document.querySelectorAll('.sequence-scroll li').forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerPoint) {
      animateListItemsSequentially();
    }
  });
});