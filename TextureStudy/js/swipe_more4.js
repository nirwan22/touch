var fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.m4a');
var fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.m4a');
var fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.m4a');
var fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.m4a');

var scalyBt = new Audio('audio/Scaly bt.m4a');
var scalyLr = new Audio('audio/Scaly lr.m4a');
var scalyRl = new Audio('audio/Scaly rl.m4a');
var scalyTb = new Audio('audio/Scaly tb.m4a');

var woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.m4a');
var woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.m4a');
var woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.m4a');
var woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.m4a');

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
    fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.m4a');
    fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.m4a');
    fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.m4a');
    fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.m4a');
    
    scalyBt = new Audio('audio/Scaly bt.m4a');
    scalyLr = new Audio('audio/Scaly lr.m4a');
    scalyRl = new Audio('audio/Scaly rl.m4a');
    scalyTb = new Audio('audio/Scaly tb.m4a');
    
    woodenHardSmooth2Bt = new Audio('audio/Wooden hard smooth 2 bt.m4a');
    woodenHardSmooth2Lr = new Audio('audio/Wooden hard smooth 2 lr.m4a');
    woodenHardSmooth2Rl = new Audio('audio/Wooden hard smooth 2 rl.m4a');
    woodenHardSmooth2Tb = new Audio('audio/Wooden hard smooth 2 tb.m4a');
    
    fluffyCarpetBt.load();
    fluffyCarpetLr.load();
    fluffyCarpetRl.load();
    fluffyCarpetTb.load();
    
    scalyBt.load();
    scalyLr.load();
    scalyRl.load();
    scalyTb.load();
    
    woodenHardSmooth2Bt.load();
    woodenHardSmooth2Lr.load();
    woodenHardSmooth2Rl.load();
    woodenHardSmooth2Tb.load();
    
    fluffyCarpetBt.play();
    fluffyCarpetLr.play();
    fluffyCarpetRl.play();
    fluffyCarpetTb.play();
    
    scalyBt.play();
    scalyLr.play();
    scalyRl.play();
    scalyTb.play();
    
    woodenHardSmooth2Bt.play();
    woodenHardSmooth2Lr.play();
    woodenHardSmooth2Rl.play();
    woodenHardSmooth2Tb.play();
    
    window.setTimeout(function(){
    
        fluffyCarpetBt.pause();
        fluffyCarpetLr.pause();
        fluffyCarpetRl.pause();
        fluffyCarpetTb.pause();
        
        scalyBt.pause();
        scalyLr.pause();
        scalyRl.pause();
        scalyTb.pause();
        
        woodenHardSmooth2Bt.pause();
        woodenHardSmooth2Lr.pause();
        woodenHardSmooth2Rl.pause();
        woodenHardSmooth2Tb.pause();
      
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
    var el1 = document.getElementById('touchsurface_p1')
    var el2 = document.getElementById('touchsurfacedata_p1')

//Bumblebee
    var el3 = document.getElementById('touchsurface_p2')
    var el4 = document.getElementById('touchsurfacedata_p2')

//Bark2
    var el5 = document.getElementById('touchsurface_p3')
    var el6 = document.getElementById('touchsurfacedata_p3')

    // fluffyCarpetBt.loop = true;
    // fluffyCarpetLr.loop = true;
    // fluffyCarpetRl.loop = true;
    // fluffyCarpetTb.loop = true;
    
    // scalyBt.loop = true;
    // scalyLr.loop = true;
    // scalyRl.loop = true;
    // scalyTb.loop = true;
    
    // woodenHardSmooth2Bt.loop = true;
    // woodenHardSmooth2Lr.loop = true;
    // woodenHardSmooth2Rl.loop = true;
    // woodenHardSmooth2Tb.loop = true;

    // fluffyCarpetBt.autoplay = true;
    // fluffyCarpetLr.autoplay = true;
    // fluffyCarpetRl.autoplay = true;
    // fluffyCarpetTb.autoplay = true;

    // scalyBt.autoplay = true;
    // scalyLr.autoplay = true;
    // scalyRl.autoplay = true;
    // scalyTb.autoplay = true;

    // woodenHardSmooth2Bt.autoplay = true;
    // woodenHardSmooth2Lr.autoplay = true;
    // woodenHardSmooth2Rl.autoplay = true;
    // woodenHardSmooth2Tb.autoplay = true;
      
    //Bark

    var playlr=0;
    var playtb=0;
    var playrl = 0;
    var playbt = 0;
    ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
      
      var playbackRate=Math.abs(distance);
      scalyTb.playbackRate=1;
      scalyLr.playbackRate=1;
      if(playbackRate>4){scalyLr.playbackRate=5;scalyTb.playbackRate=5;}
      if(playbackRate<0.8){scalyLr.playbackRate=0.5;scalyTb.playbackRate=0.5;}

      if (playlr==0 && phase=="move" && dir=="left") {scalyTb.pause();scalyBt.pause();scalyRl.pause();scalyLr.play();playlr=1;playtb=0;playbt=0;playrl=0;};
      if (playrl ==0 && phase=="move" && dir=="right") {scalyTb.pause();scalyLr.pause();scalyBt.pause();scalyRl.play();playrl=1;playlr=0;playtb=0;playbt=0;};

      if (playtb==0 && phase=="move" && dir=="down") {scalyLr.pause();scalyBt.pause();scalyRl.pause();scalyTb.play();playtb=1;playlr=0;playbt=0;playrl=0;};
      if (playbt==0 && phase=="move" && dir=="up") {scalyLr.pause();scalyBt.play();scalyRl.pause();scalyTb.pause();playtb=0;playlr=0;playbt=1;playrl=0;};

      if (playlr==1 && phase=="end") {scalyLr.pause();scalyTb.pause();scalyBt.pause();scalyRl.pause();playlr=0;} ;
      if (playrl==1 && phase=="end") {scalyLr.pause();scalyTb.pause();scalyBt.pause();scalyRl.pause();playrl=0;} ;
      if (playtb==1 && phase=="end") {scalyLr.pause();scalyTb.pause();scalyBt.pause();scalyRl.pause();playtb=0;} ;
      if (playbt==1 && phase=="end") {scalyLr.pause();scalyTb.pause();scalyBt.pause();scalyRl.pause();playbt=0;} ;
      //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
        var touchreport = '';
        touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
        touchreport += '<b>Phase:</b> ' + phase + '; ';
        touchreport += '<b>Distance:</b> ' + distance + '<br />';
        el2.innerHTML = touchreport;
    });


//Fur p5

var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el3, function(evt, dir, phase, swipetype, distance,pointertype){
  
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
    el4.innerHTML = touchreport;
});

//Fur p6

var playlr_p6=0;
var playtb_p6=0;
var playrl_p6 = 0;
var playbt_p6 = 0;
ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  fluffyCarpetTb.playbackRate=1;
  fluffyCarpetLr.playbackRate=1;
  if(playbackRate>4){fluffyCarpetLr.playbackRate=5;fluffyCarpetTb.playbackRate=5;}
  if(playbackRate<0.8){fluffyCarpetLr.playbackRate=0.5;fluffyCarpetTb.playbackRate=0.5;}

  if (playlr_p6==0 && phase=="move" && dir=="left") {fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();fluffyCarpetLr.play();playlr_p6=1;playtb_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playrl_p6 ==0 && phase=="move" && dir=="right") {fluffyCarpetTb.pause();fluffyCarpetLr.pause();fluffyCarpetBt.pause();fluffyCarpetRl.play();playrl_p6=1;playlr_p6=0;playtb_p6=0;playbt_p6=0;};

  if (playtb_p6==0 && phase=="move" && dir=="down") {fluffyCarpetLr.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();fluffyCarpetTb.play();playtb_p6=1;playlr_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playbt_p6==0 && phase=="move" && dir=="up") {fluffyCarpetLr.pause();fluffyCarpetBt.play();fluffyCarpetRl.pause();fluffyCarpetTb.pause();playtb_p6=0;playlr_p6=0;playbt_p6=1;playrl_p6=0;};

  if (playlr_p6==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playlr_p6=0;} ;
  if (playrl_p6==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playrl_p6=0;} ;
  if (playtb_p6==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playtb_p6=0;} ;
  if (playbt_p6==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playbt_p6=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el6.innerHTML = touchreport;
});

    
}, false)
 

