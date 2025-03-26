// set up some sample squares with random colors
var example = document.getElementById('example');
var context = example.getContext('2d');
var img = new Image(); // Create new img element
img.src = "./2004_Heart_Wall.jpg";
img.onload = function () {
                    //draw background image
    context.drawImage(img, 0, 0,800,600);
                    //draw a box over the top
                 //   context.fillStyle = "rgba(200, 0, 0, 0.5)";
                   // context.fillRect(0, 0, 500, 500);
                };

$('#example').mousemove(function(e) {
    var pos = findPos(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext('2d');
    var p = c.getImageData(x, y, 1, 1).data; 
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    $('#status').html(coord + "<br>" + hex);
});

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomColor() {
	return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}
