var treeBark1Bt = new Audio('audio/Tree bark 1 bt.mp4');
var treeBark1Lr = new Audio('audio/Tree bark 1 lr.mp4');
var treeBark1Rl = new Audio('audio/Tree bark 1 rl.mp4');
var treeBark1Tb = new Audio('audio/Tree bark 1 tb.mp4');

var treeBark2Bt = new Audio('audio/Tree bark 2 bt.mp4');
var treeBark2Lr = new Audio('audio/Tree bark 2 lr.mp4');
var treeBark2Rl = new Audio('audio/Tree bark 2 rl.mp4');
var treeBark2Tb = new Audio('audio/Tree bark 2 tb.mp4');

var treeBark4Bt = new Audio('audio/Tree bark 4 bt.mp4');
var treeBark4Lr = new Audio('audio/Tree bark 4 lr.mp4');
var treeBark4Rl = new Audio('audio/Tree bark 4 rl.mp4');
var treeBark4Tb = new Audio('audio/Tree bark 4 tb.mp4');

var treeBark10Bt = new Audio('audio/Tree bark 10 bt.mp4');
var treeBark10Lr = new Audio('audio/Tree bark 10 lr.mp4');
var treeBark10Rl = new Audio('audio/Tree bark 10 rl.mp4');
var treeBark10Tb = new Audio('audio/Tree bark 10 tb.mp4');

var velvetBt = new Audio('audio/Velvet bt.mp4');
var velvetLr = new Audio('audio/Velvet lr.mp4');
var velvetRl = new Audio('audio/Velvet rl.mp4');
var velvetTb = new Audio('audio/Velvet tb.mp4');

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
    treeBark1Bt = new Audio('audio/Tree bark 1 bt.mp4');
    treeBark1Lr = new Audio('audio/Tree bark 1 lr.mp4');
    treeBark1Rl = new Audio('audio/Tree bark 1 rl.mp4');
    treeBark1Tb = new Audio('audio/Tree bark 1 tb.mp4');
    
    treeBark2Bt = new Audio('audio/Tree bark 2 bt.mp4');
    treeBark2Lr = new Audio('audio/Tree bark 2 lr.mp4');
    treeBark2Rl = new Audio('audio/Tree bark 2 rl.mp4');
    treeBark2Tb = new Audio('audio/Tree bark 2 tb.mp4');
    
    treeBark4Bt = new Audio('audio/Tree bark 4 bt.mp4');
    treeBark4Lr = new Audio('audio/Tree bark 4 lr.mp4');
    treeBark4Rl = new Audio('audio/Tree bark 4 rl.mp4');
    treeBark4Tb = new Audio('audio/Tree bark 4 tb.mp4');
    
    treeBark10Bt = new Audio('audio/Tree bark 10 bt.mp4');
    treeBark10Lr = new Audio('audio/Tree bark 10 lr.mp4');
    treeBark10Rl = new Audio('audio/Tree bark 10 rl.mp4');
    treeBark10Tb = new Audio('audio/Tree bark 10 tb.mp4');
    
    velvetBt = new Audio('audio/Velvet bt.mp4');
    velvetLr = new Audio('audio/Velvet lr.mp4');
    velvetRl = new Audio('audio/Velvet rl.mp4');
    velvetTb = new Audio('audio/Velvet tb.mp4');
    treeBark1Bt.load();
    treeBark1Lr.load();
    treeBark1Rl.load();
    treeBark1Tb.load();
    
    treeBark2Bt.load();
    treeBark2Lr.load();
    treeBark2Rl.load();
    treeBark2Tb.load();
    
    treeBark4Bt.load();
    treeBark4Lr.load();
    treeBark4Rl.load();
    treeBark4Tb.load();
    
    treeBark10Bt.load();
    treeBark10Lr.load();
    treeBark10Rl.load();
    treeBark10Tb.load();
    
    velvetBt.load();
    velvetLr.load();
    velvetRl.load();
    velvetTb.load();
    
    treeBark1Bt.play();
    treeBark1Lr.play();
    treeBark1Rl.play();
    treeBark1Tb.play();
    
    treeBark2Bt.play();
    treeBark2Lr.play();
    treeBark2Rl.play();
    treeBark2Tb.play();
    
    treeBark4Bt.play();
    treeBark4Lr.play();
    treeBark4Rl.play();
    treeBark4Tb.play();
    
    treeBark10Bt.play();
    treeBark10Lr.play();
    treeBark10Rl.play();
    treeBark10Tb.play();
    
    velvetBt.play();
    velvetLr.play();
    velvetRl.play();
    velvetTb.play();

    window.setTimeout(function(){
        treeBark1Bt.pause();
        treeBark1Lr.pause();
        treeBark1Rl.pause();
        treeBark1Tb.pause();
        
        treeBark2Bt.pause();
        treeBark2Lr.pause();
        treeBark2Rl.pause();
        treeBark2Tb.pause();
        
        treeBark4Bt.pause();
        treeBark4Lr.pause();
        treeBark4Rl.pause();
        treeBark4Tb.pause();
        
        treeBark10Bt.pause();
        treeBark10Lr.pause();
        treeBark10Rl.pause();
        treeBark10Tb.pause();
        
        velvetBt.pause();
        velvetLr.pause();
        velvetRl.pause();
        velvetTb.pause();
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
   // var el3 = document.getElementById('touchsurface_p2')
    //var el4 = document.getElementById('touchsurfacedata_p2')

//Bark2
    var el5 = document.getElementById('touchsurface_p3')
    var el6 = document.getElementById('touchsurfacedata_p3')


    //Bark
    var el7 = document.getElementById('touchsurface_p4')
    var el8 = document.getElementById('touchsurfacedata_p4')


    //p5 fur
   // var el9 = document.getElementById('touchsurface_p5')
    //var el10 = document.getElementById('touchsurfacedata_p5')

    // treeBark1Bt.loop = true;
    // treeBark1Lr.loop = true;
    // treeBark1Rl.loop = true;
    // treeBark1Tb.loop = true;
    
    // treeBark2Bt.loop = true;
    // treeBark2Lr.loop = true;
    // treeBark2Rl.loop = true;
    // treeBark2Tb.loop = true;
    
    // treeBark4Bt.loop = true;
    // treeBark4Lr.loop = true;
    // treeBark4Rl.loop = true;
    // treeBark4Tb.loop = true;
    
    // treeBark10Bt.loop = true;
    // treeBark10Lr.loop = true;
    // treeBark10Rl.loop = true;
    // treeBark10Tb.loop = true;
    
    // velvetBt.loop = true;
    // velvetLr.loop = true;
    // velvetRl.loop = true;
    // velvetTb.loop = true;
    
    // treeBark1Bt.autoplay = true;
    // treeBark1Lr.autoplay = true;
    // treeBark1Rl.autoplay = true;
    // treeBark1Tb.autoplay = true;
    
    // treeBark2Bt.autoplay = true;
    // treeBark2Lr.autoplay = true;
    // treeBark2Rl.autoplay = true;
    // treeBark2Tb.autoplay = true;
    
    // treeBark4Bt.autoplay = true;
    // treeBark4Lr.autoplay = true;
    // treeBark4Rl.autoplay = true;
    // treeBark4Tb.autoplay = true;
    
    // treeBark10Bt.autoplay = true;
    // treeBark10Lr.autoplay = true;
    // treeBark10Rl.autoplay = true;
    // treeBark10Tb.autoplay = true;
    
    // velvetBt.autoplay = true;
    // velvetLr.autoplay = true;
    // velvetRl.autoplay = true;
    // velvetTb.autoplay = true;

      
    //Bark

    var playlr=0;
    var playtb=0;
    var playrl = 0;
    var playbt = 0;
    ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
      
      var playbackRate=Math.abs(distance);
      velvetTb.playbackRate=1;
      velvetLr.playbackRate=1;
      if(playbackRate>4){velvetLr.playbackRate=5;velvetTb.playbackRate=5;}
      if(playbackRate<0.8){velvetLr.playbackRate=0.5;velvetTb.playbackRate=0.5;}

      if (playlr==0 && phase=="move" && dir=="left") {velvetTb.pause();velvetBt.pause();velvetRl.pause();velvetLr.play();playlr=1;playtb=0;playbt=0;playrl=0;};
      if (playrl ==0 && phase=="move" && dir=="right") {velvetTb.pause();velvetLr.pause();velvetBt.pause();velvetRl.play();playrl=1;playlr=0;playtb=0;playbt=0;};

      if (playtb==0 && phase=="move" && dir=="down") {velvetLr.pause();velvetBt.pause();velvetRl.pause();velvetTb.play();playtb=1;playlr=0;playbt=0;playrl=0;};
      if (playbt==0 && phase=="move" && dir=="up") {velvetLr.pause();velvetBt.play();velvetRl.pause();velvetTb.pause();playtb=0;playlr=0;playbt=1;playrl=0;};

      if (playlr==1 && phase=="end") {velvetLr.pause();velvetTb.pause();velvetBt.pause();velvetRl.pause();playlr=0;} ;
      if (playrl==1 && phase=="end") {velvetLr.pause();velvetTb.pause();velvetBt.pause();velvetRl.pause();playrl=0;} ;
      if (playtb==1 && phase=="end") {velvetLr.pause();velvetTb.pause();velvetBt.pause();velvetRl.pause();playtb=0;} ;
      if (playbt==1 && phase=="end") {velvetLr.pause();velvetTb.pause();velvetBt.pause();velvetRl.pause();playbt=0;} ;
      //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
        var touchreport = '';
        touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
        touchreport += '<b>Phase:</b> ' + phase + '; ';
        touchreport += '<b>Distance:</b> ' + distance + '<br />';
       // el2.innerHTML = touchreport;
    });


//Fur p5
/*
var playlr_p5=0;
var playtb_p5=0;
var playrl_p5 = 0;
var playbt_p5 = 0;
ontouch(el3, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  treeBark4Tb.playbackRate=1;
  treeBark4Lr.playbackRate=1;
  if(playbackRate>4){treeBark4Lr.playbackRate=5;treeBark4Tb.playbackRate=5;}
  if(playbackRate<0.8){treeBark4Lr.playbackRate=0.5;treeBark4Tb.playbackRate=0.5;}

  if (playlr_p5==0 && phase=="move" && dir=="left") {treeBark4Tb.pause();treeBark4Bt.pause();treeBark4Rl.pause();treeBark4Lr.play();playlr_p5=1;playtb_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playrl_p5 ==0 && phase=="move" && dir=="right") {treeBark4Tb.pause();treeBark4Lr.pause();treeBark4Bt.pause();treeBark4Rl.play();playrl_p5=1;playlr_p5=0;playtb_p5=0;playbt_p5=0;};

  if (playtb_p5==0 && phase=="move" && dir=="down") {treeBark4Lr.pause();treeBark4Bt.pause();treeBark4Rl.pause();treeBark4Tb.play();playtb_p5=1;playlr_p5=0;playbt_p5=0;playrl_p5=0;};
  if (playbt_p5==0 && phase=="move" && dir=="up") {treeBark4Lr.pause();treeBark4Bt.play();treeBark4Rl.pause();treeBark4Tb.pause();playtb_p5=0;playlr_p5=0;playbt_p5=1;playrl_p5=0;};

  if (playlr_p5==1 && phase=="end") {treeBark4Lr.pause();treeBark4Tb.pause();treeBark4Bt.pause();treeBark4Rl.pause();playlr_p5=0;} ;
  if (playrl_p5==1 && phase=="end") {treeBark4Lr.pause();treeBark4Tb.pause();treeBark4Bt.pause();treeBark4Rl.pause();playrl_p5=0;} ;
  if (playtb_p5==1 && phase=="end") {treeBark4Lr.pause();treeBark4Tb.pause();treeBark4Bt.pause();treeBark4Rl.pause();playtb_p5=0;} ;
  if (playbt_p5==1 && phase=="end") {treeBark4Lr.pause();treeBark4Tb.pause();treeBark4Bt.pause();treeBark4Rl.pause();playbt_p5=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el4.innerHTML = touchreport;
});
*/
//Fur p6

var playlr_p6=0;
var playtb_p6=0;
var playrl_p6 = 0;
var playbt_p6 = 0;
ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){
  
  var playbackRate=Math.abs(distance);
  treeBark1Tb.playbackRate=1;
  treeBark1Lr.playbackRate=1;
  if(playbackRate>4){treeBark1Lr.playbackRate=5;treeBark1Tb.playbackRate=5;}
  if(playbackRate<0.8){treeBark1Lr.playbackRate=0.5;treeBark1Tb.playbackRate=0.5;}

  if (playlr_p6==0 && phase=="move" && dir=="left") {treeBark1Tb.pause();treeBark1Bt.pause();treeBark1Rl.pause();treeBark1Lr.play();playlr_p6=1;playtb_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playrl_p6 ==0 && phase=="move" && dir=="right") {treeBark1Tb.pause();treeBark1Lr.pause();treeBark1Bt.pause();treeBark1Rl.play();playrl_p6=1;playlr_p6=0;playtb_p6=0;playbt_p6=0;};

  if (playtb_p6==0 && phase=="move" && dir=="down") {treeBark1Lr.pause();treeBark1Bt.pause();treeBark1Rl.pause();treeBark1Tb.play();playtb_p6=1;playlr_p6=0;playbt_p6=0;playrl_p6=0;};
  if (playbt_p6==0 && phase=="move" && dir=="up") {treeBark1Lr.pause();treeBark1Bt.play();treeBark1Rl.pause();treeBark1Tb.pause();playtb_p6=0;playlr_p6=0;playbt_p6=1;playrl_p6=0;};

  if (playlr_p6==1 && phase=="end") {treeBark1Lr.pause();treeBark1Tb.pause();treeBark1Bt.pause();treeBark1Rl.pause();playlr_p6=0;} ;
  if (playrl_p6==1 && phase=="end") {treeBark1Lr.pause();treeBark1Tb.pause();treeBark1Bt.pause();treeBark1Rl.pause();playrl_p6=0;} ;
  if (playtb_p6==1 && phase=="end") {treeBark1Lr.pause();treeBark1Tb.pause();treeBark1Bt.pause();treeBark1Rl.pause();playtb_p6=0;} ;
  if (playbt_p6==1 && phase=="end") {treeBark1Lr.pause();treeBark1Tb.pause();treeBark1Bt.pause();treeBark1Rl.pause();playbt_p6=0;} ;
  //if (distance==0) {treeBark1Lr.pause();treeBark1Tb.pause();playtb=0;} ;
    var touchreport = '';
    touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
    touchreport += '<b>Phase:</b> ' + phase + '; ';
    touchreport += '<b>Distance:</b> ' + distance + '<br />';
   // el6.innerHTML = touchreport;
});


//Fur p7

var playlr_p7=0;
var playtb_p7=0;
var playrl_p7 = 0;
var playbt_p7 = 0;
ontouch(el7, function(evt, dir, phase, swipetype, distance,pointertype){
  
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


//Fur p8

var playlr_p8=0;
var playtb_p8=0;
var playrl_p8 = 0;
var playbt_p8 = 0;
/*
ontouch(el9, function(evt, dir, phase, swipetype, distance,pointertype){
  
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
    */
}, false)
 

