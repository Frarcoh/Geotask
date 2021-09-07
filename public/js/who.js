var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Hello!')
  .pauseFor(300)
  .typeString('<br> I am Frarco.')
  .pauseFor(1000)
  .start();
