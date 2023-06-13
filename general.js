const mailToContainer = document.querySelector('.contact-mailto');
const contactBall = document.querySelector('.ball.big');

function copyToClipboard() {
  navigator.clipboard.writeText('hello@roxanezait.com');
  contactBall.innerText = 'All done!';
}

mailToContainer.addEventListener('click', copyToClipboard);

setTimeout(() => {
  document.querySelector('main').classList.add('intro-complete');
}, 4000);

setTimeout(() => {
  document.body.style.overflow = 'visible';
}, 3600);
