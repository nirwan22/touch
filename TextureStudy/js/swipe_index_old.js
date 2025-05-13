var air = new Audio('audio/bumblebee.mp4');
var wood = new Audio('audio/rain_flow-light-1.mp4');
var boil = new Audio('audio/fire.mp4');
var thunder = new Audio('audio_old/thunderbolt-medium-1.wav');

var treeBark2Bt = new Audio('audio/Tree bark 2 bt.mp4');
var treeBark2Lr = new Audio('audio/Tree bark 2 lr.mp4');
var treeBark2Rl = new Audio('audio/Tree bark 2 rl.mp4');
var treeBark2Tb = new Audio('audio/Tree bark 2 tb.mp4');

var treeBark10Bt = new Audio('audio/Tree bark 10 bt.mp4');
var treeBark10Lr = new Audio('audio/Tree bark 10 lr.mp4');
var treeBark10Rl = new Audio('audio/Tree bark 10 rl.mp4');
var treeBark10Tb = new Audio('audio/Tree bark 10 tb.mp4');

var woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.mp4');
var woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.mp4');
var woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.mp4');
var woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.mp4');


console.log("Hello world!"); 

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      var loc=this.href.substr(this.href.length - 5);
      console.log('Location='+loc);
      if (loc=="p1"){loadaudio();};
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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

function loadaudio(){
   air = new Audio('audio/bumblebee.mp4');
   wood = new Audio('audio/rain_flow-light-1.mp4');
   boil = new Audio('audio/fire.mp4');
   thunder = new Audio('audio/thunderbolt-medium-1.mp4');
  
   treeBark10Bt = new Audio('audio/Tree bark 10 bt.mp4');
   treeBark10Lr = new Audio('audio/Tree bark 10 lr.mp4');
   treeBark10Rl = new Audio('audio/Tree bark 10 rl.mp4');
   treeBark10Tb = new Audio('audio/Tree bark 10 tb.mp4');
  
    treeBark2Bt = new Audio('audio/Tree bark 2 bt.mp4');
	treeBark2Lr = new Audio('audio/Tree bark 2 lr.mp4');
    treeBark2Rl = new Audio('audio/Tree bark 2 rl.mp4');
    treeBark2Tb = new Audio('audio/Tree bark 2 tb.mp4');
    
    woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.mp4');
    woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.mp4');
    woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.mp4');
    woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.mp4');
    
  console.log("Hello world! 2"); 

  air.load();
  wood.load();
  boil.load();
  thunder.load(); 
  
 treeBark2Bt.load();
    treeBark2Lr.load();
    treeBark2Rl.load();
    treeBark2Tb.load();
    
  treeBark10Bt.load();
    treeBark10Lr.load();
    treeBark10Rl.load();
    treeBark10Tb.load();
    
     woodenHardSmooth2Bt.load();
    woodenHardSmooth2Lr.load();
    woodenHardSmooth2Rl.load();
    woodenHardSmooth2Tb.load();

  console.log("Hello world! 3"); 

/*   air.play();
  wood.play();
  boil.play();
  thunder.play(); */

  console.log("Hello world! 4"); 

    window.setTimeout(function(){
        
      air.pause();
      wood.pause();
      boil.pause();
      thunder.pause();
      treeBark2Bt.pause();
        treeBark2Lr.pause();
        treeBark2Rl.pause();
        treeBark2Tb.pause();
        
       treeBark10Bt.pause();
        treeBark10Lr.pause();
        treeBark10Rl.pause();
        treeBark10Tb.pause();
        
         woodenHardSmooth2Bt.pause();
        woodenHardSmooth2Lr.pause();
        woodenHardSmooth2Rl.pause();
        woodenHardSmooth2Tb.pause();

      console.log("Hello world! 5"); 
      
    },1);
    console.log('Playing audios');
}



function ontouch(el, callback){
 
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
      handletouch = callback || function(evt, dir, phase, swipetype, distance, pointertype){}
 
    touchsurface.addEventListener('touchstart', function(e){
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

    touchsurface.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      startX=touchobj.pageX;
      startY=touchobj.pageY;
        if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
            dir = (distX < 0)? 'left' : 'right'
            handletouch(e, dir, 'move', swipeType, distX, 'touch') // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
        }
        else{ // else consider this a vertical movement
            dir = (distY < 0)? 'up' : 'down'
            handletouch(e, dir, 'move', swipeType, distY,'touch') // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
        }
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipeType = dir // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipeType = dir // set swipeType to either "top" or "down"
            }
        }
        // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
        handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY, 'touch')
        e.preventDefault()
    }, false)

   
    touchsurface.addEventListener('pointerdown', function(e){
    //    var touchobj = e.changedTouches[0]
      pointertype = e.pointerType;
      if (pointertype == "mouse" && e.buttons==1){
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
 
  
    
 touchsurface.addEventListener('pointermove', function(e){
     pointertype = e.pointerType;
     console.log("button=" + e.buttons);
     if (pointertype == "mouse" && e.buttons==1){
       distX = e.clientX - startX // get horizontal dist traveled by finger while in contact with surface
       distY = e.clientY - startY // get vertical dist traveled by finger while in contact with surface
       startX=e.clientX;
       startY=e.clientY;
       if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
             dir = (distX < 0)? 'left' : 'right'
             handletouch(e, dir, 'move', swipeType, distX,pointertype) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
       }
       else if (Math.abs(distX) < Math.abs(distY)){ // else consider this a vertical movement
             dir = (distY < 0)? 'up' : 'down'
             handletouch(e, dir, 'move', swipeType, distY,pointertype) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
         }
       else { //no movement
           handletouch(e, dir, 'end', swipeType, distY,pointertype) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
       }
       e.preventDefault() // prevent scrolling when inside DIV
     }
 }, false)
    
 

    touchsurface.addEventListener('pointerup', function(e){
        pointertype = e.pointerType;
      if (pointertype == "mouse"){
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipeType = dir // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipeType = dir // set swipeType to either "top" or "down"
            }
            }
            // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
            handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY, pointertype)
            e.preventDefault()
      }
    }, false)

    
    touchsurface.addEventListener('lostpointercapture', function(e){
        pointertype = e.pointerType;
      if (pointertype == "mouse"){
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipeType = dir // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipeType = dir // set swipeType to either "top" or "down"
            }
            }
            // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
            handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY, pointertype)
            e.preventDefault()
      }
    }, false)
    
     touchsurface.addEventListener('pointerleave', function(e){
         pointertype = e.pointerType;
       if (pointertype == "mouse"){
             elapsedTime = new Date().getTime() - startTime // get time elapsed
             if (elapsedTime <= allowedTime){ // first condition for awipe met
             if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                     swipeType = dir // set swipeType to either "left" or "right"
             }
             else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                     swipeType = dir // set swipeType to either "top" or "down"
             }
             }
             // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
             handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY, pointertype)
             e.preventDefault()
       }
     }, false)
    
     touchsurface.addEventListener('pointerout', function(e){
         pointertype = e.pointerType;
       if (pointertype == "mouse"){
             elapsedTime = new Date().getTime() - startTime // get time elapsed
             if (elapsedTime <= allowedTime){ // first condition for awipe met
             if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                     swipeType = dir // set swipeType to either "left" or "right"
             }
             else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                     swipeType = dir // set swipeType to either "top" or "down"
             }
             }
             // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
             handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY, pointertype)
             e.preventDefault()
       }
    }, false)
}
 



window.addEventListener('load', function(){
//green
    var el1  = document.getElementById('touchsurface_p1')
    var el2 = document.getElementById('touchsurfacedata_p1')

    console.log("Hello world! 6"); 

//red
    var el3 = document.getElementById('touchsurface_p2')
    var el4 = document.getElementById('touchsurfacedata_p2')

    console.log("Hello world! 7"); 

//yellow
    var el5 = document.getElementById('touchsurface_p3')
    var el6 = document.getElementById('touchsurfacedata_p3')

    console.log("Hello world! 7"); 
//black
    var el7 = document.getElementById('touchsurface_p4')
    var el8 = document.getElementById('touchsurfacedata_p4')

    console.log("Hello world! 8"); 

    //blue
    var el9 = document.getElementById('touchsurface_p5')
    var el10 = document.getElementById('touchsurfacedata_p5')

    console.log("Hello world! 9"); 

   /* air.loop = true;
    wood.loop = true;
    boil.loop = true;
    thunder.loop = true;

    console.log("Hello world! 10"); 
    
    air.autoplay = true;
    wood.autoplay = true;
    boil.autoplay = true;
    thunder.autoplay = true;
*/
    console.log("Hello world! 11"); 

      
    //green rain

    var playlr_p8=0;
var playtb_p8=0;
var playrl_p8 = 0;
var playbt_p8 = 0;
ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  treeBark2Tb.playbackRate=1;
  treeBark2Lr.playbackRate=1;
  if(playbackRate>4){treeBark2Lr.playbackRate=5;treeBark2Tb.playbackRate=5;}
  if(playbackRate<0.8){treeBark2Lr.playbackRate=0.5;treeBark2Tb.playbackRate=0.5;}

  if (playlr_p8==0 && phase=="move" && dir=="left") {treeBark2Tb.pause();treeBark2Bt.pause();treeBark2Rl.pause();treeBark2Lr.play();playlr_p8=1;playtb_p8=0;playbt_p8=0;playrl_p8=0;};
  if (playrl_p8 ==0 && phase=="move" && dir=="right") {treeBark2Tb.pause();treeBark2Lr.pause();treeBark2Bt.pause();treeBark2Rl.play();playrl_p8=1;playlr_p8=0;playtb_p8=0;playbt_p8=0;};

  if (playtb_p8==0 && phase=="move" && dir=="down") {treeBark2Lr.pause();treeBark2Bt.pause();treeBark2Rl.pause();treeBark2Tb.play();playtb_p8=1;playlr_p8=0;playbt_p8=0;playrl_p8=0;};
  if (playbt_p8==0 && phase=="move" && dir=="up") {treeBark2Lr.pause();treeBark2Bt.play();treeBark2Rl.pause();treeBark2Tb.pause();playtb_p8=0;playlr_p8=0;playbt_p8=1;playrl_p8=0;};

  if (playlr_p8==1 && phase=="end") {treeBark2Lr.pause();treeBark2Tb.pause();treeBark2Bt.pause();treeBark2Rl.pause();playlr_p8=0;} ;
  if (playrl_p8==1 && phase=="end") {treeBark2Lr.pause();treeBark2Tb.pause();treeBark2Bt.pause();treeBark2Rl.pause();playrl_p8=0;} ;
  if (playtb_p8==1 && phase=="end") {treeBark2Lr.pause();treeBark2Tb.pause();treeBark2Bt.pause();treeBark2Rl.pause();playtb_p8=0;} ;
  if (playbt_p8==1 && phase=="end") {treeBark2Lr.pause();treeBark2Tb.pause();treeBark2Bt.pause();treeBark2Rl.pause();playbt_p8=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el10.innerHTML = touchreport;
});


 //air

 var play=0;

 ontouch(el3, function(evt, dir, phase, swipetype, distance,pointertype){

   if (play==0 && phase=="start") {air.play();play=1;};
   if (play==1 && phase=="end") {air.pause();play=0;} ;
     var touchreport = '';
     touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
     touchreport += '<b>Phase:</b> ' + phase + '; ';
     touchreport += '<b>Distance:</b> ' + distance + '<br />';
    // el4.innerHTML = touchreport;

     console.log("Hello world! 13"); 
 });


 var play=0;

   var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  woodenHardSmooth2Tb.playbackRate=1;
  woodenHardSmooth2Lr.playbackRate=1;
  if(playbackRate>4){woodenHardSmooth2Lr.playbackRate=5;woodenHardSmooth2Tb.playbackRate=5;}
  if(playbackRate<0.8){woodenHardSmooth2Lr.playbackRate=0.5;woodenHardSmooth2Tb.playbackRate=0.5;}

  if (playlr_p5==0 && phase=="move" && dir=="left") {woodenHardSmooth2Tb.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();woodenHardSmooth2Lr.play();playlr_p5=1;playtb_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playrl_p5 ==0 && phase=="move" && dir=="right") {woodenHardSmooth2Tb.pause();woodenHardSmooth2Lr.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.play();playrl_p5=1;playlr_p5=0;playtb_p5=0;playbt_p5=0;};

  if (playtb_p5==0 && phase=="move" && dir=="down") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();woodenHardSmooth2Tb.play();playtb_p5=1;playlr_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playbt_p5==0 && phase=="move" && dir=="up") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Bt.play();woodenHardSmooth2Rl.pause();woodenHardSmooth2Tb.pause();playtb_p5=0;playlr_p5=0;playbt_p5=1;playrl_p5=0;};

  if (playlr_p5==1 && phase=="end") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Tb.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();playlr_p5=0;} ;
  if (playrl_p5==1 && phase=="end") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Tb.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();playrl_p5=0;} ;
  if (playtb_p5==1 && phase=="end") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Tb.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();playtb_p5=0;} ;
  if (playbt_p5==1 && phase=="end") {woodenHardSmooth2Lr.pause();woodenHardSmooth2Tb.pause();woodenHardSmooth2Bt.pause();woodenHardSmooth2Rl.pause();playbt_p5=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el4.innerHTML = touchreport;
});

  //boil

  var play=0;

  ontouch(el7, function(evt, dir, phase, swipetype, distance,pointertype){

    if (play==0 && phase=="start") {boil.play();play=1;};
    if (play==1 && phase=="end") {boil.pause();play=0;} ;
      var touchreport = '';
      touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
      touchreport += '<b>Phase:</b> ' + phase + '; ';
      touchreport += '<b>Distance:</b> ' + distance + '<br />';
    //  el6.innerHTML = touchreport;
      console.log(phase);
      console.log("Hello world! 14"); 
  });

   //thunder

  var playlr_p7=0;
var playtb_p7=0;
var playrl_p7 = 0;
var playbt_p7 = 0;
ontouch(el9, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  treeBark10Tb.playbackRate=1;
  treeBark10Lr.playbackRate=1;
  if(playbackRate>4){treeBark10Lr.playbackRate=5;treeBark10Tb.playbackRate=5;}
  if(playbackRate<0.8){treeBark10Lr.playbackRate=0.5;treeBark10Tb.playbackRate=0.5;}

  if (playlr_p7==0 && phase=="move" && dir=="left") {treeBark10Tb.pause();treeBark10Bt.pause();treeBark10Rl.pause();treeBark10Lr.play();playlr_p7=1;playtb_p7=0;playbt_p7=0;playrl_p7=0;};
  if (playrl_p7 ==0 && phase=="move" && dir=="right") {treeBark10Tb.pause();treeBark10Lr.pause();treeBark10Bt.pause();treeBark10Rl.play();playrl_p7=1;playlr_p7=0;playtb_p7=0;playbt_p7=0;};

  if (playtb_p7==0 && phase=="move" && dir=="down") {treeBark10Lr.pause();treeBark10Bt.pause();treeBark10Rl.pause();treeBark10Tb.play();playtb_p7=1;playlr_p7=0;playbt_p7=0;playrl_p7=0;};
  if (playbt_p7==0 && phase=="move" && dir=="up") {treeBark10Lr.pause();treeBark10Bt.play();treeBark10Rl.pause();treeBark10Tb.pause();playtb_p7=0;playlr_p7=0;playbt_p7=1;playrl_p7=0;};

  if (playlr_p7==1 && phase=="end") {treeBark10Lr.pause();treeBark10Tb.pause();treeBark10Bt.pause();treeBark10Rl.pause();playlr_p7=0;} ;
  if (playrl_p7==1 && phase=="end") {treeBark10Lr.pause();treeBark10Tb.pause();treeBark10Bt.pause();treeBark10Rl.pause();playrl_p7=0;} ;
  if (playtb_p7==1 && phase=="end") {treeBark10Lr.pause();treeBark10Tb.pause();treeBark10Bt.pause();treeBark10Rl.pause();playtb_p7=0;} ;
  if (playbt_p7==1 && phase=="end") {treeBark10Lr.pause();treeBark10Tb.pause();treeBark10Bt.pause();treeBark10Rl.pause();playbt_p7=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el8.innerHTML = touchreport;
});


    
}, false)
 

