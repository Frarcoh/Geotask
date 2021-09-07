var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Geography.')
  .pauseFor(300)
  .deleteChars(7)
  .typeString('<strong>task</strong>. <br> Made <strong>by</strong> students, ')
  .pauseFor(300)
  .typeString('<strong>for</strong> students.')
  .pauseFor(1000)
  .start();

