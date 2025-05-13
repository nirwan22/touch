var audiol = new Audio('audio/fur-l.mp4');
var audior = new Audio('audio/fur-r.mp4');
var audiot = new Audio('audio/fur-t.mp4');
var audiob = new Audio('audio/fur-b.mp4');

var scalyBt = new Audio('audio/Scaly bt.mp4');
var scalyLr = new Audio('audio/Scaly lr.mp4');
var scalyRl = new Audio('audio/Scaly rl.mp4');
var scalyTb = new Audio('audio/Scaly tb.mp4');

var fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.mp4');
var fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.mp4');
var fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.mp4');
var fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.mp4');

var wood = new Audio('audio/rain_flow-light-1.mp4')

var treeBark4Lr = new Audio('audio/Tree bark 4 lr.mp4');

console.log("swide grid 1"); 

$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    var loc = this.href.substr(this.href.length - 5);
    console.log('Location=' + loc);
    if (loc == "p1") { loadaudio(); };
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log('Scroling pages');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1);
        return false;
      }
    }
  });
});

function loadaudio() {
  audiol = new Audio('audio/fur-l.mp4');
  audior = new Audio('audio/fur-r.mp4');
  audiot = new Audio('audio/fur-t.mp4');
  audiob = new Audio('audio/fur-b.mp4');

  

  fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.mp4');
  fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.mp4');
  fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.mp4');
  fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.mp4');

  scalyBt = new Audio('audio/Scaly bt.mp4');
  scalyLr = new Audio('audio/Scaly lr.mp4');
  scalyRl = new Audio('audio/Scaly rl.mp4');
  scalyTb = new Audio('audio/Scaly tb.mp4');

  wood = new Audio('audio/rain_flow-light-1.wav')

  treeBark4Lr = new Audio('audio/Tree bark 4 lr.mp4');

  console.log("swide grid 2"); 

  wood.load();
  treeBark4Lr.load();
  // wood.play();
  // treeBark4Lr.play();

  audiol.load();
  audior.load();
  audiot.load();
  audiob.load();


  fluffyCarpetBt.load();
  fluffyCarpetLr.load();
  fluffyCarpetRl.load();
  fluffyCarpetTb.load();

  scalyBt.load();
  scalyLr.load();
  scalyRl.load();
  scalyTb.load();

  console.log("swide grid 3"); 

  // audiol.play();
  // audior.play();
  // audiot.play();
  // audiob.play();

  // scalyBt.play();
  // scalyLr.play();
  // scalyRl.play();
  // scalyTb.play();

  window.setTimeout(function () {
    audiol.pause();
    audior.pause();
    audiot.pause();
    audiob.pause();

    fluffyCarpetBt.pause();
    fluffyCarpetLr.pause();
    fluffyCarpetRl.pause();
    fluffyCarpetTb.pause();

    scalyBt.pause();
    scalyLr.pause();
    scalyRl.pause();
    scalyTb.pause();

    wood.pause();

    treeBark4Lr.pause();

    console.log("swide grid 4"); 

  }, 1);
  console.log('Playing audios');
}



function ontouch(el, callback) {

  var touchsurface = el,
    dir,
    swipeType,
    startX,
    startY,
    distX,
    distY,
    threshold = 0, //required min distance traveled to be considered swipe
    pointertype,
    restraint = 300, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 1500, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handletouch = callback || function (evt, dir, phase, swipetype, distance, pointertype) { }

  touchsurface.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0]
    dir = 'none'
    swipeType = 'none'
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // record time when finger first makes contact with surface
    handletouch(e, 'none', 'start', swipeType, 0, 'touch') // fire callback function with params dir="none", phase="start", swipetype="none" etc
    e.preventDefault()

  }, false)

  touchsurface.addEventListener('touchmove', function (e) {
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
    distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    if (Math.abs(distX) > Math.abs(distY)) { // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
      dir = (distX < 0) ? 'left' : 'right'
      handletouch(e, dir, 'move', swipeType, distX, 'touch') // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
    }
    else { // else consider this a vertical movement
      dir = (distY < 0) ? 'up' : 'down'
      handletouch(e, dir, 'move', swipeType, distY, 'touch') // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
    }
    e.preventDefault() // prevent scrolling when inside DIV
  }, false)


  touchsurface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0]
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    if (elapsedTime <= allowedTime) { // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
        swipeType = dir // set swipeType to either "left" or "right"
      }
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
        swipeType = dir // set swipeType to either "top" or "down"
      }
    }
    // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
    handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY, 'touch')
    e.preventDefault()
  }, false)


  touchsurface.addEventListener('pointerdown', function (e) {
    //    var touchobj = e.changedTouches[0]
    pointertype = e.pointerType;
    if (pointertype == "mouse" && e.buttons == 1) {
      console.log('PointerType=' + pointertype);
      dir = 'none'
      swipeType = 'none'
      dist = 0
      startX = e.clientX
      startY = e.ClientY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      handletouch(e, 'none', 'start', swipeType, 0, pointertype) // fire callback function with params dir="none", phase="start", swipetype="none" etc
      e.preventDefault()
    }
  }, false)



  touchsurface.addEventListener('pointermove', function (e) {
    pointertype = e.pointerType;
    console.log("button=" + e.buttons);
    if (pointertype == "mouse" && e.buttons == 1) {
      distX = e.clientX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = e.clientY - startY // get vertical dist traveled by finger while in contact with surface
      startX = e.clientX;
      startY = e.clientY;
      if (Math.abs(distX) > Math.abs(distY)) { // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
        dir = (distX < 0) ? 'left' : 'right'
        handletouch(e, dir, 'move', swipeType, distX, pointertype) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
      }
      else if (Math.abs(distX) < Math.abs(distY)) { // else consider this a vertical movement
        dir = (distY < 0) ? 'up' : 'down'
        handletouch(e, dir, 'move', swipeType, distY, pointertype) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
      }
      else { //no movement
        handletouch(e, dir, 'end', swipeType, distY, pointertype) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
      }
      e.preventDefault() // prevent scrolling when inside DIV
    }
  }, false)



  touchsurface.addEventListener('pointerup', function (e) {
    pointertype = e.pointerType;
    if (pointertype == "mouse") {
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime) { // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
          swipeType = dir // set swipeType to either "left" or "right"
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
          swipeType = dir // set swipeType to either "top" or "down"
        }
      }
      // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
      handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY, pointertype)
      e.preventDefault()
    }
  }, false)


  touchsurface.addEventListener('lostpointercapture', function (e) {
    pointertype = e.pointerType;
    if (pointertype == "mouse") {
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime) { // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
          swipeType = dir // set swipeType to either "left" or "right"
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
          swipeType = dir // set swipeType to either "top" or "down"
        }
      }
      // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
      handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY, pointertype)
      e.preventDefault()
    }
  }, false)

  touchsurface.addEventListener('pointerleave', function (e) {
    pointertype = e.pointerType;
    if (pointertype == "mouse") {
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime) { // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
          swipeType = dir // set swipeType to either "left" or "right"
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
          swipeType = dir // set swipeType to either "top" or "down"
        }
      }
      // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
      handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY, pointertype)
      e.preventDefault()
    }
  }, false)

  touchsurface.addEventListener('pointerout', function (e) {
    pointertype = e.pointerType;
    if (pointertype == "mouse") {
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime) { // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
          swipeType = dir // set swipeType to either "left" or "right"
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
          swipeType = dir // set swipeType to either "top" or "down"
        }
      }
      // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
      handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY, pointertype)
      e.preventDefault()
    }
  }, false)
}




window.addEventListener('load', function () {
  //Badger Fur
  //var el1 = document.getElementById('touchsurface_p1')
  //var el2 = document.getElementById('touchsurfacedata_p1')

  //Bumblebee
 // var el3 = document.getElementById('touchsurface_p2')
  //var el4 = document.getElementById('touchsurfacedata_p2')

  //Bark2
  //var el5 = document.getElementById('touchsurface_p3')
  //var el6 = document.getElementById('touchsurfacedata_p3')


  //Bark
  //var el7 = document.getElementById('touchsurface_p4')
  //var el8 = document.getElementById('touchsurfacedata_p4')


  //p5 fur
  //var el9 = document.getElementById('touchsurface_p5')
  //var el10 = document.getElementById('touchsurfacedata_p5')


  // audiol.loop = true;
  // audiol.autoplay = true;
  // audior.loop = true;
  // audior.autoplay = true;
  // audiot.loop = true;
  // audiot.autoplay = true;
  // audiob.loop = true;
  // audiob.autoplay = true;

  // fluffyCarpetBt.loop = true;
  // fluffyCarpetLr.loop = true;
  // fluffyCarpetRl.loop = true;
  // fluffyCarpetTb.loop = true;

  // scalyBt.loop = true;
  // scalyLr.loop = true;
  // scalyRl.loop = true;
  // scalyTb.loop = true;

  // fluffyCarpetBt.autoplay = true;
  // fluffyCarpetLr.autoplay = true;
  // fluffyCarpetRl.autoplay = true;
  // fluffyCarpetTb.autoplay = true;

  // scalyBt.autoplay = true;
  // scalyLr.autoplay = true;
  // scalyRl.autoplay = true;
  // scalyTb.autoplay = true;

  // wood.loop = true;
  // wood.autoplay = true;

  // treeBark4Lr.loop = true;
  // treeBark4Lr.autoplay = true;

  console.log("swide grid 5"); 

  //badger

 /* var play = 0;

  ontouch(el1, function (evt, dir, phase, swipetype, distance, pointertype) {

    if (play == 0 && phase == "move") { audior.play(); play = 1; };
    if (play == 1 && phase == "end") { audior.pause(); play = 0; };
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el2.innerHTML = touchreport;

    console.log("swide grid 6"); 
  });


  //tree bark

  var play = 0;

  ontouch(el3, function (evt, dir, phase, swipetype, distance, pointertype) {

    if (play == 0 && phase == "move") { treeBark4Lr.play(); play = 1; };
    if (play == 1 && phase == "end") { treeBark4Lr.pause(); play = 0; };
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    //el4.innerHTML = touchreport;

    console.log("swide grid 7"); 
  });

  //honeycomb
/*
  var play = 0;

  ontouch(el5, function (evt, dir, phase, swipetype, distance, pointertype) {

    if (play == 0 && phase == "move") { scalyLr.play(); play = 1; };
    if (play == 1 && phase == "end") { scalyLr.pause(); play = 0; };
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el6.innerHTML = touchreport;
    console.log("swide grid 8"); 
  });

  //snake

  var play = 0;

  ontouch(el7, function (evt, dir, phase, swipetype, distance, pointertype) {

    if (play == 0 && phase == "move") { fluffyCarpetLr.play(); play = 1; };
    if (play == 1 && phase == "end") { fluffyCarpetLr.pause(); play = 0; };
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el8.innerHTML = touchreport;
    console.log("swide grid 9"); 
  });


    //green

    var play = 0;

    ontouch(el9, function (evt, dir, phase, swipetype, distance, pointertype) {
  
      if (play == 0 && phase == "move") { wood.play(); play = 1; };
      if (play == 1 && phase == "end") { wood.pause(); play = 0; };
      var touchreport = '';
      touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
      touchreport += '<b>Phase:</b> ' + phase + '; ';
      touchreport += '<b>Distance:</b> ' + distance + '<br />';
     // el10.innerHTML = touchreport;
      console.log("swide grid 10"); 
    });
  
/*
}, false)


