document.querySelectorAll('.card').forEach(card => {
const originalImage = card.style.backgroundImage;
const hoverImage = card.getAttribute('data-hover');

card.addEventListener('mouseover', () => {
card.style.backgroundImage = `url(${hoverImage})`;
});

card.addEventListener('mouseout', () => {
card.style.backgroundImage = originalImage;
});
});