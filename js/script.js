$(".cell").click(function() {
  var num = numRandom();



});

function numRandom() {
  var n = Math.floor(Math.random() * 100)+1;
  return n;
}
