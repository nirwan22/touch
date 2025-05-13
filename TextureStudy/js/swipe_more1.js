var audiol = new Audio('audio/fur-l.mp4');
var audior = new Audio('audio/fur-r.mp4');
var audiot = new Audio('audio/fur-t.mp4');
var audiob = new Audio('audio/fur-b.mp4');

var fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.m4a');
var fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.m4a');
var fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.m4a');
var fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.m4a');

var fluffyCushion2Bt = new Audio('audio/Fluffy cushion 2 bt.m4a');
var fluffyCushion2Lr = new Audio('audio/Fluffy cushion 2 lr.m4a');
var fluffyCushion2Rl = new Audio('audio/Fluffy cushion 2 rl.m4a');
var fluffyCushion2Tb = new Audio('audio/Fluffy cushion 2 tb.m4a');

var smoothCushionBt = new Audio('audio/Smooth cushion bt.m4a');
var smoothCushionLr = new Audio('audio/Smooth cushion lr.m4a');
var smoothCushionRl = new Audio('audio/Smooth cushion rl.m4a');
var smoothCushionTb = new Audio('audio/Smooth cushion tb.m4a');

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

    fluffyCarpetBt = new Audio('audio/Fluffy carpet bt.m4a');
    fluffyCarpetLr = new Audio('audio/Fluffy carpet lr.m4a');
    fluffyCarpetRl = new Audio('audio/Fluffy carpet rl.m4a');
    fluffyCarpetTb = new Audio('audio/Fluffy carpet tb.m4a');
    
    fluffyCushion2Bt = new Audio('audio/Fluffy cushion 2 bt.m4a');
    fluffyCushion2Lr = new Audio('audio/Fluffy cushion 2 lr.m4a');
    fluffyCushion2Rl = new Audio('audio/Fluffy cushion 2 rl.m4a');
    fluffyCushion2Tb = new Audio('audio/Fluffy cushion 2 tb.m4a');
    
    smoothCushionBt = new Audio('audio/Smooth cushion bt.m4a');
    smoothCushionLr = new Audio('audio/Smooth cushion lr.m4a');
    smoothCushionRl = new Audio('audio/Smooth cushion rl.m4a');
    smoothCushionTb = new Audio('audio/Smooth cushion tb.m4a');

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

    //Bark
    var el7 = document.getElementById('touchsurface_p4')
    var el8 = document.getElementById('touchsurfacedata_p4')

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

    var playlr=0;
    var playtb=0;
    var playrl = 0;
    var playbt = 0;
    ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
      
      var playbackRate=Math.abs(distance);
      fluffyCarpetTb.playbackRate=1;
      fluffyCarpetLr.playbackRate=1;
      if(playbackRate>4){fluffyCarpetLr.playbackRate=5;fluffyCarpetTb.playbackRate=5;}
      if(playbackRate<0.8){fluffyCarpetLr.playbackRate=0.5;fluffyCarpetTb.playbackRate=0.5;}

      if (playlr==0 && phase=="move" && dir=="left") {fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();fluffyCarpetLr.play();playlr=1;playtb=0;playbt=0;playrl=0;};
      if (playrl ==0 && phase=="move" && dir=="right") {fluffyCarpetTb.pause();fluffyCarpetLr.pause();fluffyCarpetBt.pause();fluffyCarpetRl.play();playrl=1;playlr=0;playtb=0;playbt=0;};

      if (playtb==0 && phase=="move" && dir=="down") {fluffyCarpetLr.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();fluffyCarpetTb.play();playtb=1;playlr=0;playbt=0;playrl=0;};
      if (playbt==0 && phase=="move" && dir=="up") {fluffyCarpetLr.pause();fluffyCarpetBt.play();fluffyCarpetRl.pause();fluffyCarpetTb.pause();playtb=0;playlr=0;playbt=1;playrl=0;};

      if (playlr==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playlr=0;} ;
      if (playrl==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playrl=0;} ;
      if (playtb==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playtb=0;} ;
      if (playbt==1 && phase=="end") {fluffyCarpetLr.pause();fluffyCarpetTb.pause();fluffyCarpetBt.pause();fluffyCarpetRl.pause();playbt=0;} ;
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
    el4.innerHTML = touchreport;
});

//Fur p6

var playlr_p6=0;
var playtb_p6=0;
var playrl_p6 = 0;
var playbt_p6 = 0;
ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  fluffyCushion2Tb.playbackRate=1;
  fluffyCushion2Lr.playbackRate=1;
  if(playbackRate>4){fluffyCushion2Lr.playbackRate=5;fluffyCushion2Tb.playbackRate=5;}
  if(playbackRate<0.8){fluffyCushion2Lr.playbackRate=0.5;fluffyCushion2Tb.playbackRate=0.5;}

  if (playlr_p6==0 && phase=="move" && dir=="left") {fluffyCushion2Tb.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();fluffyCushion2Lr.play();playlr_p6=1;playtb_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playrl_p6 ==0 && phase=="move" && dir=="right") {fluffyCushion2Tb.pause();fluffyCushion2Lr.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.play();playrl_p6=1;playlr_p6=0;playtb_p6=0;playbt_p6=0;};

  if (playtb_p6==0 && phase=="move" && dir=="down") {fluffyCushion2Lr.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();fluffyCushion2Tb.play();playtb_p6=1;playlr_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playbt_p6==0 && phase=="move" && dir=="up") {fluffyCushion2Lr.pause();fluffyCushion2Bt.play();fluffyCushion2Rl.pause();fluffyCushion2Tb.pause();playtb_p6=0;playlr_p6=0;playbt_p6=1;playrl_p6=0;};

  if (playlr_p6==1 && phase=="end") {fluffyCushion2Lr.pause();fluffyCushion2Tb.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();playlr_p6=0;} ;
  if (playrl_p6==1 && phase=="end") {fluffyCushion2Lr.pause();fluffyCushion2Tb.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();playrl_p6=0;} ;
  if (playtb_p6==1 && phase=="end") {fluffyCushion2Lr.pause();fluffyCushion2Tb.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();playtb_p6=0;} ;
  if (playbt_p6==1 && phase=="end") {fluffyCushion2Lr.pause();fluffyCushion2Tb.pause();fluffyCushion2Bt.pause();fluffyCushion2Rl.pause();playbt_p6=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el6.innerHTML = touchreport;
});


//Fur p7

var playlr_p7=0;
var playtb_p7=0;
var playrl_p7 = 0;
var playbt_p7 = 0;
ontouch(el7, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  audiob.playbackRate=1;
  audior.playbackRate=1;
  if(playbackRate>4){audior.playbackRate=5;audiob.playbackRate=5;}
  if(playbackRate<0.8){audior.playbackRate=0.5;audiob.playbackRate=0.5;}

  if (playlr_p7==0 && phase=="move" && dir=="left") {audiob.pause();audiot.pause();audiol.pause();audior.play();playlr_p7=1;playtb_p7=0;playbt_p7=0;playrl_p7=0;};
  if (playrl_p7 ==0 && phase=="move" && dir=="right") {audiob.pause();audior.pause();audiot.pause();audiol.play();playrl_p7=1;playlr_p7=0;playtb_p7=0;playbt_p7=0;};

  if (playtb_p7==0 && phase=="move" && dir=="down") {audior.pause();audiot.pause();audiol.pause();audiob.play();playtb_p7=1;playlr_p7=0;playbt_p7=0;playrl_p7=0;};
  if (playbt_p7==0 && phase=="move" && dir=="up") {audior.pause();audiot.play();audiol.pause();audiob.pause();playtb_p7=0;playlr_p7=0;playbt_p7=1;playrl_p7=0;};

  if (playlr_p7==1 && phase=="end") {audior.pause();audiob.pause();audiot.pause();audiol.pause();playlr_p7=0;} ;
  if (playrl_p7==1 && phase=="end") {audior.pause();audiob.pause();audiot.pause();audiol.pause();playrl_p7=0;} ;
  if (playtb_p7==1 && phase=="end") {audior.pause();audiob.pause();audiot.pause();audiol.pause();playtb_p7=0;} ;
  if (playbt_p7==1 && phase=="end") {audior.pause();audiob.pause();audiot.pause();audiol.pause();playbt_p7=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
    el8.innerHTML = touchreport;
});
    
}, false)
 

