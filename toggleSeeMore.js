let toggles = document.querySelectorAll('.experience-entry-see-more');

function toggleText() {
  const parent = this.parentElement;
  const excerpt = parent.querySelector('.experience-entry-excerpt');
  const points = parent.querySelector('.experience-entry-points');

  excerpt.style.display = 'inline';
  points.style.display = 'none';
  this.style.display = 'none';
}

toggles.forEach((toggle) => {
  toggle.addEventListener('click', toggleText)
});





