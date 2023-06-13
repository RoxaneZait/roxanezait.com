if (window.innerWidth > 1000) {
  const hoverContainers = document.querySelectorAll('.mouse-enter-container');
  const ball = document.querySelector('.ball.big');
  const smallBall = document.querySelector('.ball.small');

  function onMouseEnter() {
    if (this.classList.contains('small')) {
      smallBall.classList.add('active');
    } else {
      ball.classList.add('active');
    }
  }

  function onMouseLeave() {
    if (this.classList.contains('small')) {
      smallBall.classList.remove('active');
    } else {
      ball.classList.remove('active');
    }
    ball.innerHTML = 'Click to </br> copy';
  }

  function onMouseMove(e) {
    if (e.target.classList.contains('small')) {
      smallBall.style.left = `${e.x - 30}px`;
      smallBall.style.top = `${e.pageY - 30}px`;
    } else {
      ball.style.left = `${e.x - 62}px`;
      ball.style.top = `${e.pageY - 62}px`;
    }
  }

  hoverContainers.forEach((hoverContainer) => {
    hoverContainer.addEventListener('mouseover', onMouseEnter);
    hoverContainer.addEventListener('mouseleave', onMouseLeave);
    hoverContainer.addEventListener('wheel', onMouseMove);
  });

  document.body.addEventListener('mousemove', onMouseMove);
}
