let text = document.getElementById('text');

window.addEventListener('scroll', () => {

letValue = window.scrollY;

text.style.marginLeft = value * 2.5 + 'px';

});