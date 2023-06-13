const sliderSections = document.querySelectorAll('.slide-in');
const windowHeight = window.innerHeight;

document.addEventListener('scroll', enterInView);

function enterInView() {
  sliderSections.forEach((sliderSection) => {
    const sliderSectionTop = sliderSection.getBoundingClientRect().top;
    const distanceInView = sliderSectionTop - windowHeight + 50;
    if (distanceInView < 0) {
      sliderSection.classList.add('active');
    }
  });
}

enterInView();
