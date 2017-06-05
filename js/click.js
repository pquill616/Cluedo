var main = document.querySelector('body main');
main.innerHTML = '';

var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
main.innerHTML += touchEvent + '\n';

touchEvent = 'ontouchstart' in document ? 'touchstart' : 'click';
main.innerHTML += touchEvent + '\n';

var touchEvent = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
main.innerHTML += touchEvent + '\n';