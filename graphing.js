var dimension = [document.documentElement.clientWidth + 500, document.documentElement.clientHeight + 500];
var c = document.getElementById("myCanvas");
var navDim = [document.getElementsByClassName("topnav")[0].clientWidth, document.getElementsByClassName("topnav")[0].clientHeight];
c.width = dimension[0];
c.height = dimension[1];
var updatedSquare = [-1, -1];
var mouseIsDown = false;
window.addEventListener('mousemove', mousemove, false);
window.addEventListener('mousedown', mousedown, false);
window.addEventListener('mouseup', mouseup, false);

var graph = new Array();
function start() {
	for (var i = 0; i < dimension[1] / navDim[1]; i++) {
		graph[i] = new Array();
	    for (var j = 0; j < dimension[0] / navDim[1] + 1; j++) {
	    	var x = Math.random();
	    	if (x > 0.5) {
	    		graph[i].push(true);
	    	} else {
	    		graph[i].push(false);
	    	}
	    }
	}
	console.log(graph);
	draw();
}

function draw() {
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, dimension[0], dimension[1]);
	ctx.strokeStyle = "#80AAF5";
	ctx.fillStyle = "#80AAF5";
	ctx.lineWidth = 5;

	for (var i = 0; i < graph.length; i++) {
		for (var j = 0; j < graph[i].length; j++) {
			if (graph[i][j] == true) {
	            ctx.fillRect(j * navDim[1], i * navDim[1], navDim[1], navDim[1]);
			} else {
	            ctx.strokeRect(j * navDim[1], i * navDim[1], navDim[1], navDim[1]);
			}
		}
	}
}

function mousemove(e) {
  console.log("moving");
  var c = document.getElementById("myCanvas");
  var x = Math.floor(e.clientX / navDim[1]);
  var y = Math.floor(e.clientY / navDim[1]);
  draw();
  if (x != updatedSquare[0] || y != updatedSquare[1]) {
  	  updatedSquare[0] = -1;
  	  updatedSquare[1] = -1;
	  if (graph[y][x] == true) {
	    // var ctx = c.getContext("2d");
	    // ctx.fillStyle = "#FFFFFF";
	    // ctx.fillRect(x * navDim[1], y * navDim[1], navDim[1], navDim[1])
	    // ctx.strokeStyle = "#80AAF5";
	    // ctx.strokeRect(x * navDim[1], y * navDim[1], navDim[1], navDim[1]);
	  } else {
	    var ctx = c.getContext("2d");
	    ctx.fillStyle = "#80AAF5";
	    ctx.fillRect(x * navDim[1], y * navDim[1], navDim[1], navDim[1]);
	  }
	  if (mouseIsDown == true) {
	  	updateCanvas(x, y);
	  }
  }
}

function mousedown(e) {
	var x = Math.floor(e.clientX / navDim[1]);
	var y = Math.floor(e.clientY / navDim[1]);
	mouseIsDown = true;
	updateCanvas(x, y);
}

function mouseup(e) {
	console.log("released");
	mouseIsDown = false;
}
function updateCanvas(x, y) {
	console.log("updating");
	var c = document.getElementById("myCanvas");
	// var x = Math.floor(e.clientX / navDim[1]);
	// var y = Math.floor(e.clientY / navDim[1]);
	if (graph[y][x] == true) {
		graph[y][x] = false;
	} else {
		graph[y][x] = true;
	}
	updatedSquare[0] = x;
	updatedSquare[1] = y;
	draw();
}