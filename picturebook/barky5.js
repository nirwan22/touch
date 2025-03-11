var canvas;
var canvasColors;

var canvasDiv;
var canvasColorsDiv;

var interfaceType = "canvas";
var context;
var contextColors;
var scaleFactor = vmax(100) / 1200;
var scaleFactorM = vmax(100) / 1200;
var scaleFactorH = vh(100) / 1000;
if (scaleFactorM * 700 > vh(100)) { scaleFactorM = vh(100) / 900; }
//if (scaleFactorM>1.3){scaleFactorM=1;}

var myScreenOrientation = window.screen.orientation;

var orient = "landscape";

var toolWidth = 300 * scaleFactorM;
var toolHeight = 800 * scaleFactorM;
var canvasX = 0;
var canvasY = 0;

var windowWidth = $(this).innerWidth();
var windowHeight = $(this).innerHeight();
var canvasWidth = $(this).innerWidth() - 10;
var canvasHeight = $(this).innerHeight();//-vmin(3.7);

var markerX = 400;
var markerX2 = 400 * scaleFactor;
var padding = 25;
var lineWidth = 8;

var colorFur3 = "fur3";
var colorFur2 = "fur2";
var colorScales1 = "scales1";
var colorSand = "sand";
var colorEye = "eyehex";
var colorBuzz = "buzz";
var colorBark = "bark";

var logoImage = new Image();

var bella = new Image();
var main = new Image();

var crayonPattern;
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();

var pixelTexture = {};
for (let i = 0; i < canvasWidth; i++) {
	pixelTexture[i] = {};

}

var paint = false;
var curTex = "null";

var curTool = "haptics";

var drawingAreaX = 10 + canvasX;
var drawingAreaY = 10;
var drawingAreaWidth = canvasWidth - 10;
var drawingAreaHeight = canvasHeight - 20;

var totalLoadResources = 13;
var curLoadResNum = 0;

var fur2 = new Audio('audio/fur2.mp4');
fur2.load();
fur2.loop = true;
var playFur2 = 0;

var fur3 = new Audio('audio/fur3.mp4');
fur3.load();
fur3.loop = true;
var playFur3 = 0;

var sand = new Audio('audio/Scaly lr.m4a');
sand.load();
sand.loop = true;
var playSand = 0;

var scales = new Audio('audio/croc-scales.mp4');
//var scales = new Audio('audio/fire.mp4');
scales.load();
scales.loop = true;
var playScales = 0;

var eyeHex = new Audio('audio/Scaly bt.mp3');
eyeHex.load();
eyeHex.loop = true;
var playEyeHex = 0;

var buzz = new Audio('audio/Scaly lr.m4a');
buzz.load();
buzz.loop = true;
var playBuzz = 0;

var bark_sound = new Audio('audio/Tree bark 2 lr.mp4')
bark_sound.load();
bark_sound.loop = true;
var playBark_sound = 0;

/**
* Calls the redraw function after all neccessary resources are loaded.
*/
function resourceLoaded() {
	//	if(++curLoadResNum >= totalLoadResources){
	redrawInterface(interfaceType);
	//	}
}

function vh(percent) {
	var h = Math.max(document.documentElement.clientHeight, $(this).innerHeight() || 0);
	return (percent * h) / 100;
}

function vw(percent) {
	var w = Math.max(document.documentElement.clientWidth, $(this).innerWidth() || 0);
	return (percent * w) / 100;
}

function vmin(percent) {
	return Math.min(vh(percent), vw(percent));
}

function vmax(percent) {
	return Math.max(vh(percent), vw(percent));
}
var elem = document.documentElement;
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
};
/**
* Creates a canvas element, loads images, adds events, and draws the canvas for the first time.
*/
function prepareCanvas() {

	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	canvasDiv = document.getElementById('canvasDiv');

	canvas = document.createElement('canvas');
	canvas.setAttribute('width', windowWidth);
	canvas.setAttribute('height', windowHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);

	if (typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	console.log("SCALE=" + scaleFactor + "vw/vh=" + vw(100) + "/" + vh(100));
	// Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");

	// Load images
	// -----------
	bella.onload = function () { resourceLoaded(); };
	bella.src = "images/barky_left.png";

	main.onload = function () { resourceLoaded(); };
	main.src = "images/bumblebee_pollen_basket_1000x933.jpg";

	// adding button
	// Create the button element:
	const button1 = document.createElement('button');

	// Icon and text:
	button1.innerHTML = '<i class="bi bi-house"></i> Home';

	// Positioning:
	button1.style.position = "absolute";
	button1.style.left = canvasWidth * 0.8 + "px"; // One-third of canvas width
	button1.style.top = canvasHeight * 0.9 + "px"; // Half of canvas height

	// Styling:
	button1.classList.add("btn", "btn-lg", "btn-outline-success");

	// Add the button to the canvas's parent element:
	canvasDiv.appendChild(button1);

	// Add an event listener for the button click:
	button1.addEventListener('click', () => {
		console.log("Button1 clicked!");
		window.location.href = "index.html";
		// Your code to execute when the button is clicked
	});

	/* // Create the button element:
	const button2 = document.createElement('button');

	// Icon and text:
	button2.innerHTML = '<i class="bi bi-caret-right"></i> Next';

	// Positioning:
	button2.style.position = "absolute";
	button2.style.left = canvasWidth * 0.9 + "px"; // One-third of canvas width
	button2.style.top = canvasHeight * 0.9 + "px"; // Half of canvas height

	// Styling:
	button2.classList.add("btn", "btn-lg", "btn-outline-success");

	// Add the button to the canvas's parent element:
	canvasDiv.appendChild(button2);

	// Add an event listener for the button click:
	button2.addEventListener('click', () => {
		console.log("Button2 clicked!");
		window.location.href = "bella6.html";
		// Your code to execute when the button is clicked
	}); */

	// Create the button element:
	const button3 = document.createElement('button');

	// Icon and text:
	button3.innerHTML = '<i class="bi bi-caret-left"></i> Back';

	// Positioning:
	button3.style.position = "absolute";
	button3.style.left = canvasWidth * 0.9 + "px"; // One-third of canvas width
	button3.style.top = canvasHeight * 0.9 + "px"; // Half of canvas height

	// Styling:
	button3.classList.add("btn", "btn-lg", "btn-outline-success");

	// Add the button to the canvas's parent element:
	canvasDiv.appendChild(button3);

	// Add an event listener for the button click:
	button3.addEventListener('click', () => {
		console.log("Button3 clicked!");
		window.location.href = "barky4_1.html";
		// Your code to execute when the button is clicked
	});

	/* 	// Create the button element:
		const button4 = document.createElement('button');

		// Icon and text:
		button4.innerHTML = 'Submit';
	
		// Positioning:
		button4.style.position = "absolute";
		button4.style.left = canvasWidth * 0.7 + "px"; // One-third of canvas width
		button4.style.top = canvasHeight * 0.9 + "px"; // Half of canvas height
	
		// Styling:
		button4.classList.add("btn", "btn-lg", "btn-success");
	
		// Add the button to the canvas's parent element:
		canvasDiv.appendChild(button4);
	
		// Add an event listener for the button click:
		button4.addEventListener('click', () => {
			console.log("Button4 clicked!");
			submitQuiz();  // Call the submitQuiz function
		});


			// Create the result display area
	const resultDiv = document.createElement('div');
	resultDiv.id = 'result';
	resultDiv.classList.add('alert', 'alert-success', 'mt-3');
	resultDiv.role = 'alert';
	resultDiv.textContent = 'Your score will be displayed here.';

		// Positioning:
		resultDiv.style.position = "absolute";
		resultDiv.style.left = canvasWidth * 0.9 + "px";
		resultDiv.style.top = canvasHeight * 0.001 + "px";
	
		// Margin and padding:
	resultDiv.style.margin = "20px"; // Adjust values as needed
	resultDiv.style.padding = "15px"; // Adjust values as needed
	
	// Append the div element to the desired location in your DOM
	canvasDiv.appendChild(resultDiv); */

	/* 
		// Create a div element with the specified classes
		const contentDiv = document.createElement('div');
		contentDiv.classList.add('bg-success-subtle', 'rounded-3', 'h3');
	
		// Create the text content with line breaks
		const contentText = "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15 word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15 word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15";
	
		// Add the text content to the div element
		contentDiv.textContent = contentText;
	
		// Positioning:
		contentDiv.style.position = "absolute";
		contentDiv.style.left = canvasWidth * 0.001 + "px";
		contentDiv.style.top = canvasHeight * 0.001 + "px";
	
		// Margin and padding:
		contentDiv.style.margin = "20px"; // Adjust values as needed
		contentDiv.style.padding = "15px"; // Adjust values as needed
	
		// Append the div element to the desired location in your DOM
		canvasDiv.appendChild(contentDiv); */


	// Create the form element
	const form = document.createElement('div');
	form.id = 'myForm';

	//formDiv.appendChild(form);

	// Create the heading
	const heading = document.createElement('h1');
	heading.textContent = 'Tree Bark Activity';
	heading.classList.add('text-center', 'mt-4', 'mb-3');

	// Add the heading to the form
	form.appendChild(heading);

	const bodytext1 = document.createElement('h5');
	bodytext1.textContent = "Look out for trees with unique bark patterns. Explore the different textures by looking and through touch.";
	bodytext1.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext1);

	const bodytext2 = document.createElement('h5');
	bodytext2.textContent = 'Bark Rubbings';
	bodytext2.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext2);

	const bodytext3 = document.createElement('h5');
	bodytext3.textContent = 'You will need:';
	bodytext3.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext3);

	const bodytext4 = document.createElement('h5');
	bodytext4.textContent = 'Wax crayons without any labels on (Red, purple, black and brown colours work well.)';
	bodytext4.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext4);

	const bodytext5 = document.createElement('h5');
	bodytext5.textContent = 'Plain white paper.';
	bodytext5.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext5);

	const bodytext6 = document.createElement('h5');
	bodytext6.textContent = 'Hold the paper against the bark. Rub the paper with the long edge of the crayon. (Not the pointed bit you use for writing.) The texture of the bark will come through onto the paper. Look at the pattern. Make rubbings of other tree barks.';
	bodytext6.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext6);

	const bodytext7 = document.createElement('h5');
	bodytext7.textContent = 'How are they different? How are they the same? Which is your favourite and why? Can you display your collection of rubbings at school (or at home) to create a tree bark texture gallery?';
	bodytext7.classList.add('text-center', 'mt-4', 'mb-3');

	form.appendChild(bodytext7);


	/* // Create the list of questions
	const listGroup = document.createElement('ol');
	listGroup.classList.add('list-group');

	// Create the first question
	const questionItem = document.createElement('li');
	questionItem.classList.add('list-group-item');

	const questionText = document.createElement('p');
	//questionText.classList.add('m-3', 'p-3');
	questionText.textContent = '1. Why do bumblebees wear fuzzy coats?';
	questionItem.appendChild(questionText);

	// Create radio buttons for options
	const optionLabels = [
		'   a) To fly faster   ',
		'   b) To stay warm   ',
		'   c) For camouflage   ',
		'   d) Fashion statement   '
	];
	optionLabels.forEach(option => {
		const label = document.createElement('label');
		label.classList.add('form-check-label', 'p', 'm-3', 'p-3');

		const radioInput = document.createElement('input');
		radioInput.type = 'radio';
		radioInput.classList.add('form-check-input');
		radioInput.name = 'q1'; // Assuming this is the name for the question
		radioInput.required = true; // Add validation

		label.appendChild(radioInput);
		label.appendChild(document.createTextNode(option));
		questionItem.appendChild(label);
	});

	listGroup.appendChild(questionItem);

	// Create the second question
	const questionItem2 = document.createElement('li');
	questionItem2.classList.add('list-group-item');

	const questionText2 = document.createElement('h6');
	//questionText2.classList.add('m-3', 'p-3');
	questionText2.textContent = '2. What is the purpose of the bright colors on a bumblebee\'s fur?';
	questionItem2.appendChild(questionText2);

	// Create radio buttons for options
	const optionLabels2 = [
		'a) Attracting mates',
		'b) To warn other animals',
		'c) Reflecting sunlight',
		'd) Expressing emotions'
	];
	optionLabels2.forEach(option => {
		const label = document.createElement('label');
		label.classList.add('form-check-label', 'p', 'm-3', 'p-3');

		const radioInput = document.createElement('input');
		radioInput.type = 'radio';
		radioInput.classList.add('form-check-input');
		radioInput.name = 'q2'; // Name for the second question
		radioInput.required = true;

		label.appendChild(radioInput);
		label.appendChild(document.createTextNode(option));
		questionItem2.appendChild(label);
	});

	listGroup.appendChild(questionItem2);

	// Create the third question
	const questionItem3 = document.createElement('li');
	questionItem3.classList.add('list-group-item');

	const questionText3 = document.createElement('h6');
	//questionText3.classList.add('mb-3');
	questionText3.textContent = '3. How do bumblebees communicate with their buzzing sound?';
	questionItem3.appendChild(questionText3);

	// Create radio buttons for options
	const optionLabels3 = [
		'a) Celebrating',
		'b) Warning of danger',
		'c) They are talking to other bees',
		'd) Expressing happiness'
	];
	optionLabels3.forEach(option => {
		const label = document.createElement('label');
		label.classList.add('form-check-label', 'p', 'm-3', 'p-3');

		const radioInput = document.createElement('input');
		radioInput.type = 'radio';
		radioInput.classList.add('form-check-input');
		radioInput.name = 'q3'; // Name for the second question
		radioInput.required = true;

		label.appendChild(radioInput);
		label.appendChild(document.createTextNode(option));
		questionItem3.appendChild(label);
	});

	listGroup.appendChild(questionItem3); */

	//form.appendChild(listGroup);

/* 	// Create the submit button
	const submitButton = document.createElement('button');
	submitButton.classList.add('btn', 'btn-success', 'btn-lg', 'mt-3');
	submitButton.type = 'button'; // Use a button type for better control
	submitButton.textContent = 'Submit';
	submitButton.addEventListener('click', submitQuiz);

	// Create the result display area
	const resultDiv = document.createElement('div');
	resultDiv.id = 'result';
	resultDiv.classList.add('alert', 'alert-success', 'mt-3');
	resultDiv.role = 'alert';
	resultDiv.textContent = 'Your score will be displayed here.';

	// Append the button and result area to the form
	form.appendChild(resultDiv); */

	// Positioning:
	form.style.position = "absolute";
	form.style.left = canvasWidth * 0.001 + "px";
	form.style.top = canvasHeight * 0.001 + "px";

	// Margin and padding:
	form.style.margin = "20px"; // Adjust values as needed
	form.style.padding = "15px"; // Adjust values as needed

	// Append the form to the body
	canvasDiv.appendChild(form);


	// Add mouse events
	// ----------------
	$('#canvas').on("pointerdown", function (e) {
		//	openFullscreen();
		// Mouse down location
		var mouseX = Math.round(e.pageX - this.offsetLeft);
		var mouseY = Math.round(e.pageY - this.offsetTop);
		//	var mouseX = Math.round(e.originalEvent.touches[0].pageX - this.offsetLeft);
		//	var mouseY = Math.round(e.originalEvent.touches[0].pageY - this.offsetTop);
		console.log("Canvas touched");
		if (interfaceType == "canvas") {

			if (orient == "landscape") {
				//check clicks in toolbar

				// Mouse down location
				{
					// Mouse click location on drawing area
					if (curTool == "haptics") {
						var t = "null";
						console.log("canvasX,canvasY=" + canvasWidth + ", " + canvasHeight);
						console.log("x,y=" + mouseX + ", " + mouseY);
						console.log(mouseX / canvasWidth, mouseY / canvasHeight);

						if (mouseX > canvasWidth * 0.008 && mouseX < canvasWidth * 0.5
							&& mouseY > canvasHeight * 0.06
							&& mouseY < canvasHeight * 0.99) {
							t = colorBuzz;
							console.log(t)
						}

						/* if (mouseX > canvasWidth * 0.67 && mouseX < canvasWidth
							&& mouseY > canvasHeight * 0.5 && mouseY < canvasHeight) {
							t = "eyehex";
							console.log("bbEyeZoomed");

						}
						else if (mouseX > canvasWidth * 0.7 && mouseX < canvasWidth * 0.9
							&& mouseY > canvasHeight * 0.1 && mouseY < canvasHeight * 0.48) {
							t = "scales1";
							console.log("bbEye2")
						}

						else if (mouseX > canvasWidth * 0.53 && mouseX < canvasWidth * 0.58
							&& mouseY > canvasHeight * 0.41 && mouseY < canvasHeight * 0.59) {
							t = "scales1";
							console.log("bbEye1")
						}

						else if (mouseX > canvasWidth * 0.21 && mouseX < canvasWidth * 0.28
							&& mouseY > canvasHeight * 0.28 && mouseY < canvasHeight * 0.96) {
							t = "sand";
							console.log("pollenBasket")
						}

						else if (mouseX > 1 && mouseX < 200
							&& mouseY > canvasHeight - 210 && mouseY < canvasHeight) {
							t = colorBuzz;
							console.log("buzz")
						}

						else if (mouseX > canvasWidth * 0.08 && mouseX < canvasWidth * 0.2
							&& mouseY > canvasHeight * 0.08 && mouseY < canvasHeight * 0.87) {
							t = colorFur3;
							console.log("fur1")
						}

						else if (mouseX > canvasWidth * 0.2 && mouseX < canvasWidth * 0.64
							&& mouseY > canvasHeight * 0.04 && mouseY < canvasHeight * 0.4) {
							t = colorFur2;
							console.log("fur2")
						} */

						console.log("tex=" + t + " startaudio");
						closeAudios(t);
						if (t == colorSand) {
							if (playSand == 0) { sand.play(); playSand = 1; };
						}
						else if (t == colorScales1) {
							if (playScales == 0) { scales.play(); playScales = 1; };
						}
						else if (t == colorFur2) {
							if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
						}
						else if (t == colorFur3) {
							if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
						}

						else if (t == colorEye) {
							if (playEyeHex == 0) { eyeHex.play(); playEyeHex = 1; };
						}
						else if (t == colorBuzz) {
							if (playBuzz == 0) { buzz.play(); playBuzz = 1; };
						}

						else if (t == colorBark) {
							if (playBark_sound == 0) { bark_sound.play(); playBark_sound = 1; };
						}

					}
				}
			}

		}
	});

	$('#canvas').on("pointermove", function (e) {
		if (e.buttons > 0) {
			var mouseX = Math.round(e.pageX - this.offsetLeft);
			var mouseY = Math.round(e.pageY - this.offsetTop);
			//var mouseX = Math.round(e.originalEvent.touches[0].pageX - this.offsetLeft);
			//var mouseY = Math.round(e.originalEvent.touches[0].pageY - this.offsetTop);
			if (curTool == "haptics") {
				var t = "null";

				if (mouseX > canvasWidth * 0.008 && mouseX < canvasWidth * 0.5
					&& mouseY > canvasHeight * 0.06
					&& mouseY < canvasHeight * 0.99) {
					t = colorBuzz;
					console.log(t)
				}


				/* if (mouseX > canvasWidth * 0.67 && mouseX < canvasWidth
					&& mouseY > canvasHeight * 0.5 && mouseY < canvasHeight) {
					t = "eyehex";
					console.log("bbEyeZoomed");
				}

				else if (mouseX > canvasWidth * 0.7 && mouseX < canvasWidth * 0.9
					&& mouseY > canvasHeight * 0.1 && mouseY < canvasHeight * 0.48) {
					t = "scales1";
					console.log("bbEye2")
				}

				else if (mouseX > canvasWidth * 0.53 && mouseX < canvasWidth * 0.58
					&& mouseY > canvasHeight * 0.41 && mouseY < canvasHeight * 0.59) {
					t = "scales1";
					console.log("bbEye1")
				}

				else if (mouseX > canvasWidth * 0.21 && mouseX < canvasWidth * 0.28
					&& mouseY > canvasHeight * 0.28 && mouseY < canvasHeight * 0.96) {
					t = "sand";
					console.log("pollenBasket")
				}

				else if (mouseX > 1 && mouseX < 200 && mouseY > canvasHeight - 210 && mouseY < canvasHeight - 10) {
					t = colorBuzz;
					console.log("buzz")
				}

				else if (mouseX > canvasWidth * 0.08 && mouseX < canvasWidth * 0.2
					&& mouseY > canvasHeight * 0.08 && mouseY < canvasHeight * 0.87) {
					t = colorFur3;
					console.log("fur1")
				}

				else if (mouseX > canvasWidth * 0.2 && mouseX < canvasWidth * 0.64
					&& mouseY > canvasHeight * 0.04 && mouseY < canvasHeight * 0.4) {
					t = colorFur2;
					console.log("fur2")
				} */

				console.log("touchmove=" + t);
				closeAudios(t);

				if (t == "sand") {
					if (playSand == 0) { sand.play(); playSand = 1; };
				}
				else if (t == "scales1") {
					if (playScales == 0) { scales.play(); playScales = 1; };
				}
				else if (t == "fur2") {
					if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
				}
				else if (t == "fur3") {
					if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
				}

				else if (t == "eyehex") {
					if (playEyeHex == 0) { eyeHex.play(); playEyeHex = 1; };
				}
			}

			else if (t == colorBuzz) {
				if (playBuzz == 0) { buzz.play(); playBuzz = 1; };
			}

			else if (t == colorBark) {
				if (playBark_sound == 0) { bark_sound.play(); playBark_sound = 1; };
			}

			else {
				console.log("close audios");
				closeAudios("null");
			}
		}
	});

	$('#canvas').on("pointerup", function (e) {
		paint = false;
		closeAudios("null");
	});

	$('#canvas').on("pointercancel", function (e) {
		closeAudios("null");
		paint = false;
	});
	$('#canvas').on("pointerout", function (e) {
		closeAudios("null");
		paint = false;
	});
	$('#canvas').on("pointerleave", function (e) {
		closeAudios("null");
		paint = false;
	});

	redrawInterface("canvas");
};

function closeAudios(t) {

	if (t != "sand") {
		if (playSand == 1) { sand.pause(); playSand = 0; };
	}
	if (t != "scales1") {
		if (playScales == 1) { scales.pause(); playScales = 0; };
	}
	if (t != "fur2") {
		if (playFur2 == 1) { fur2.pause(); playFur2 = 0; };
	}
	if (t != "fur3") {
		if (playFur3 == 1) { fur3.pause(); playFur3 = 0; };
	}

	if (t != "eyehex") {
		if (playEyeHex == 1) { eyeHex.pause(); playEyeHex = 0; };
	}

	if (t != "buzz") {
		if (playBuzz == 1) { buzz.pause(); playBuzz = 0; };
	}

	if (t != colorBark) {
		if (playBark_sound == 1) { bark_sound.pause(); playBark_sound = 0; };
	}

};

/**
* Adds a point to the drawing array.
* @param x
* @param y
* @param dragging
*/

/**
* Clears the canvas.
*/

/**
* Redraws the interface.
*/
function redrawInterface(intType) {
	interfaceType = intType;
	if (interfaceType == "canvas") {
		canvasDiv.style.visibility = 'visible';
	}

	console.log("redrawing interface: inttype=" + interfaceType + " curtool=" + curTool);

	var locX;
	var locY;
	if (interfaceType == "canvas") {

		var yUnit = toolHeight / 10;
		//draw toolbar

		//end toolbar
		context.strokeStyle = '#70ba5d';
		context.lineWidth = 10;
		context.fillStyle = "#fff";
		//draw canvas
		context.fillRect(canvasX + 5, 5, canvasWidth, canvasHeight - 10);
		context.strokeRect(canvasX + 5, 5, canvasWidth, canvasHeight - 10);
		console.log("h=" + canvasHeight + " w=" + canvasWidth);
		//context.drawImage(logoImage, canvasWidth * 0.44, 10, canvasWidth * 0.16, canvasHeight * 0.16 * 1.6);
		//context.drawImage(bella, canvasWidth * 0.65, canvasHeight * 0.5, canvasWidth * 0.2, canvasHeight * 0.2 * 1.6);
		//context.drawImage(main, canvasWidth * 0.01, canvasHeight * 0.03, canvasWidth * 0.5, canvasHeight * 0.95);

		console.log("draw logo: h=" + canvasHeight + " w=" + canvasWidth);
	}
};

function submitQuiz() {
	const correctAnswers = ["b", "b", "c", "b", "c", "c"]; // Adjust for correct answers
	let score = 0;
  
	const listGroup = document.querySelector('ol.list-group');
	const questionItems = listGroup.querySelectorAll('li');
  
	for (let i = 0; i < questionItems.length; i++) {
	  const selectedAnswer = questionItems[i].querySelector('input:checked');
	  if (selectedAnswer && selectedAnswer.value === correctAnswers[i]) {
		score++;
	  }
	}
  
	const resultElement = document.getElementById("result");
	resultElement.textContent = `You got ${score} out of ${questionItems.length} correct. The correct answers are given below:`;
  
	// Display correct answers
	for (let i = 0; i < questionItems.length; i++) {
	  const correctAnswer = questionItems[i].querySelector(`input[value="${correctAnswers[i]}"]`).parentNode.textContent;
	  resultElement.innerHTML += `<br><strong>Question ${i + 1}:</strong> ${correctAnswer}`;
	}
  };
