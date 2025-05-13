var audiol = new Audio('audio/fur-l.mp4');
var audior = new Audio('audio/fur-r.mp4');
var audiot = new Audio('audio/fur-t.mp4');
var audiob = new Audio('audio/fur-b.mp4');

var fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.mp4');
var fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.mp4');
var fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.mp4');
var fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.mp4');

var fluffyCushion2Bt = new Audio('audio/Fluffy cushion 2 bt.mp4');
var fluffyCushion2Lr = new Audio('audio/Fluffy cushion 2 lr.mp4');
var fluffyCushion2Rl = new Audio('audio/Fluffy cushion 2 rl.mp4');
var fluffyCushion2Tb = new Audio('audio/Fluffy cushion 2 tb.mp4');

var smoothCushionBt = new Audio('audio/Smooth cushion bt.mp4');
var smoothCushionLr = new Audio('audio/Smooth cushion lr.mp4');
var smoothCushionRl = new Audio('audio/Smooth cushion rl.mp4');
var smoothCushionTb = new Audio('audio/Smooth cushion tb.mp4');


var woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.mp4');
var woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.mp4');
var woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.mp4');
var woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.mp4');


var scalyBt = new Audio('audio/Scaly bt.mp4');
var scalyLr = new Audio('audio/Scaly lr.mp4');
var scalyRl = new Audio('audio/Scaly rl.mp4');
var scalyTb = new Audio('audio/Scaly tb.mp4');

var  beehive = new Audio('audio/beehive.mp4');
var audiolrtb = new Audio('audio/bumblebee.mp4');
var rain = new Audio('audio/rain_flow-light-1.mp4');
var fire = new Audio('audio/fire.mp4');

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
    audiol = new Audio('audio/fur-l.mp4');
    audior = new Audio('audio/fur-r.mp4');
    audiot = new Audio('audio/fur-t.mp4');
    audiob = new Audio('audio/fur-b.mp4');

    fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.mp4');
    fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.mp4');
    fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.mp4');
    fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.mp4');
    
    fluffyCushion2Bt = new Audio('audio/Fluffy cushion 2 bt.mp4');
    fluffyCushion2Lr = new Audio('audio/Fluffy cushion 2 lr.mp4');
    fluffyCushion2Rl = new Audio('audio/Fluffy cushion 2 rl.mp4');
    fluffyCushion2Tb = new Audio('audio/Fluffy cushion 2 tb.mp4');
    
    smoothCushionBt = new Audio('audio/Smooth cushion bt.mp4');
    smoothCushionLr = new Audio('audio/Smooth cushion lr.mp4');
    smoothCushionRl = new Audio('audio/Smooth cushion rl.mp4');
    smoothCushionTb = new Audio('audio/Smooth cushion tb.mp4');

	scalyBt = new Audio('audio/Scaly bt.mp4');
    scalyLr = new Audio('audio/Scaly lr.mp4');
    scalyRl = new Audio('audio/Scaly rl.mp4');
    scalyTb = new Audio('audio/Scaly tb.mp4');
    
    beehive = new Audio('audio/beehive.mp4');
    audiolrtb = new Audio('audio/bumblebee.mp4');

 	woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.mp4');
    woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.mp4');
    woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.mp4');
    woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.mp4');
    
    fire = new Audio('audio/fire.mp4');
    rain = new Audio('audio/rain_flow-light-1.wav');

 	beehive.load();
    beehive.play();
    
    audiolrtb.load();
    audiolrtb.play();
    
    woodenHardSmooth2Bt.load();
    woodenHardSmooth2Lr.load();
    woodenHardSmooth2Rl.load();
    woodenHardSmooth2Tb.load();
    
    rain.load();
    rain.play();
    
    fire.load();
    fire.play();
    

    audiol.load();
    audior.load();
    audiot.load();
    audiob.load();

    fluffyCarpetBt.load();
    fluffyCarpetLr.load();
    fluffyCarpetRl.load();
    fluffyCarpetTb.load();
    
    fluffyCushion2Bt.load();
    fluffyCushion2Lr.load();
    fluffyCushion2Rl.load();
    fluffyCushion2Tb.load();
    
    smoothCushionBt.load();
    smoothCushionLr.load();
    smoothCushionRl.load();
    smoothCushionTb.load();
    
    audiol.play();
    audior.play();
    audiot.play();
    audiob.play();

    fluffyCarpetBt.play();
    fluffyCarpetLr.play();
    fluffyCarpetRl.play();
    fluffyCarpetTb.play();
    
    fluffyCushion2Bt.play();
    fluffyCushion2Lr.play();
    fluffyCushion2Rl.play();
    fluffyCushion2Tb.play();
    
    smoothCushionBt.play();
    smoothCushionLr.play();
    smoothCushionRl.play();
    smoothCushionTb.play();
    
     woodenHardSmooth2Bt.play();
    woodenHardSmooth2Lr.play();
    woodenHardSmooth2Rl.play();
    woodenHardSmooth2Tb.play();
    

    window.setTimeout(function(){
        audiol.pause();
        audior.pause();
        audiot.pause();
        audiob.pause();

        fluffyCarpetBt.pause();
        fluffyCarpetLr.pause();
        fluffyCarpetRl.pause();
        fluffyCarpetTb.pause();
        
        fluffyCushion2Bt.pause();
        fluffyCushion2Lr.pause();
        fluffyCushion2Rl.pause();
        fluffyCushion2Tb.pause();
                
        smoothCushionBt.pause();
        smoothCushionLr.pause();
        smoothCushionRl.pause();
        smoothCushionTb.pause();
        
        beehive.pause();
        audiolrtb.pause();
        
        
        woodenHardSmooth2Bt.pause();
        woodenHardSmooth2Lr.pause();
        woodenHardSmooth2Rl.pause();
        woodenHardSmooth2Tb.pause();
        rain.pause();
        fire.pause;
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
//Badger Fur
    var el1 = document.getElementById('touchsurface_p1');
    var el2 = document.getElementById('touchsurfacedata_p1');

//Bumblebee
    var el3 = document.getElementById('touchsurface_p2');
    var el4 = document.getElementById('touchsurfacedata_p2');

//Bark2
    var el5 = document.getElementById('touchsurface_p3');
    var el6 = document.getElementById('touchsurfacedata_p3');

    //Bark
    var el7 = document.getElementById('touchsurface_p4');
    var el8 = document.getElementById('touchsurfacedata_p4');

	var el9 = document.getElementById('touchsurface_p5');
    var el10 = document.getElementById('touchsurfacedata_p5');
    
    var el11 = document.getElementById('touchsurface_p6');
    var el12 = document.getElementById('touchsurfacedata_p6');

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
    
    // fluffyCushion2Bt.loop = true;
    // fluffyCushion2Lr.loop = true;
    // fluffyCushion2Rl.loop = true;
    // fluffyCushion2Tb.loop = true;
    
    // smoothCushionBt.loop = true;
    // smoothCushionLr.loop = true;
    // smoothCushionRl.loop = true;
    // smoothCushionTb.loop = true;

    // fluffyCarpetBt.autoplay = true;
    // fluffyCarpetLr.autoplay = true;
    // fluffyCarpetRl.autoplay = true;
    // fluffyCarpetTb.autoplay = true;
    
    // fluffyCushion2Bt.autoplay = true;
    // fluffyCushion2Lr.autoplay = true;
    // fluffyCushion2Rl.autoplay = true;
    // fluffyCushion2Tb.autoplay = true;
    
    // smoothCushionBt.autoplay = true;
    // smoothCushionLr.autoplay = true;
    // smoothCushionRl.autoplay = true;
    // smoothCushionTb.autoplay = true;
      
    //Bark

   
    
    var play=0;

   var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
  
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

//Fur p5

var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el3, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  smoothCushionTb.playbackRate=1;
  smoothCushionLr.playbackRate=1;
  if(playbackRate>4){smoothCushionLr.playbackRate=5;smoothCushionTb.playbackRate=5;}
  if(playbackRate<0.8){smoothCushionLr.playbackRate=0.5;smoothCushionTb.playbackRate=0.5;}

  if (playlr_p5==0 && phase=="move" && dir=="left") {smoothCushionTb.pause();smoothCushionBt.pause();smoothCushionRl.pause();smoothCushionLr.play();playlr_p5=1;playtb_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playrl_p5 ==0 && phase=="move" && dir=="right") {smoothCushionTb.pause();smoothCushionLr.pause();smoothCushionBt.pause();smoothCushionRl.play();playrl_p5=1;playlr_p5=0;playtb_p5=0;playbt_p5=0;};

  if (playtb_p5==0 && phase=="move" && dir=="down") {smoothCushionLr.pause();smoothCushionBt.pause();smoothCushionRl.pause();smoothCushionTb.play();playtb_p5=1;playlr_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playbt_p5==0 && phase=="move" && dir=="up") {smoothCushionLr.pause();smoothCushionBt.play();smoothCushionRl.pause();smoothCushionTb.pause();playtb_p5=0;playlr_p5=0;playbt_p5=1;playrl_p5=0;};

  if (playlr_p5==1 && phase=="end") {smoothCushionLr.pause();smoothCushionTb.pause();smoothCushionBt.pause();smoothCushionRl.pause();playlr_p5=0;} ;
  if (playrl_p5==1 && phase=="end") {smoothCushionLr.pause();smoothCushionTb.pause();smoothCushionBt.pause();smoothCushionRl.pause();playrl_p5=0;} ;
  if (playtb_p5==1 && phase=="end") {smoothCushionLr.pause();smoothCushionTb.pause();smoothCushionBt.pause();smoothCushionRl.pause();playtb_p5=0;} ;
  if (playbt_p5==1 && phase=="end") {smoothCushionLr.pause();smoothCushionTb.pause();smoothCushionBt.pause();smoothCushionRl.pause();playbt_p5=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el4.innerHTML = touchreport;
});

//Fur p6

var play=0;

    ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){
  
      if (play==0 && phase=="start") {audiolrtb.play();play=1;};
      if (play==1 && phase=="end") {audiolrtb.pause();play=0;} ;
        var touchreport = '';
        touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
        touchreport += '<b>Phase:</b> ' + phase + '; ';
        touchreport += '<b>Distance:</b> ' + distance + '<br />';
       // el4.innerHTML = touchreport;
    });


//Fur p7

var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el7, function(evt, dir, phase, swipetype, distance,pointertype){
  
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

/*var play=0;

     ontouch(el9, function(evt, dir, phase, swipetype, distance,pointertype){
   
       if (play==0 && phase=="start") {rain.play();play=1;};
       if (play==1 && phase=="end") {rain.pause();play=0;} ;
         var touchreport = '';
         touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
         touchreport += '<b>Phase:</b> ' + phase + '; ';
         touchreport += '<b>Distance:</b> ' + distance + '<br />';
        // el2.innerHTML = touchreport;
     });
 */    
     
     
 var play=0;

  ontouch(el11, function(evt, dir, phase, swipetype, distance,pointertype){

    if (play==0 && phase=="start") {fire.play();play=1;};
    if (play==1 && phase=="end") {fire.pause();play=0;} ;
      var touchreport = '';
      touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
      touchreport += '<b>Phase:</b> ' + phase + '; ';
      touchreport += '<b>Distance:</b> ' + distance + '<br />';
    //  el6.innerHTML = touchreport;
      
  });

  
}, false)
 

