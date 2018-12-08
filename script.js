console.log('Connected')

// //Menu Text Gradient
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
//
// var grd = ctx.createLinearGradient(0,0,300,0);
// ctx.font = "50px arial";
// grd.addColorStop(0, "white");
// grd.addColorStop(1, "black");
//
// ctx. fillStyle=grd;
// ctx.fillText("Test", 150, 50);

var arrows = document.querySelectorAll('.arrow');

for (i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click', function() {
  console.log('clicked');
  });
};
