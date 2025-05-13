var air = new Audio('audio/airblow-1.wav')
var wood = new Audio('audio/rain_flow-light-1.wav')
var boil = new Audio('audio/fire.mp3')
var thunder = new Audio('audio/thunderbolt-medium-1.wav')

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
   var air = new Audio('audio/airblow-1.wav')
   var wood = new Audio('audio/rain_flow-light-1.wav')
   var boil = new Audio('audio/fire.mp3')
   var thunder = new Audio('audio/thunderbolt-medium-1.wav')
  console.log("Hello world! 2"); 

  air.load();
  wood.load();
  boil.load();
  thunder.load(); 

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

//black
    var el5 = document.getElementById('touchsurface_p3')
    var el6 = document.getElementById('touchsurfacedata_p3')

    console.log("Hello world! 8"); 

    //blue
    var el7 = document.getElementById('touchsurface_p4')
    var el8 = document.getElementById('touchsurfacedata_p4')

    console.log("Hello world! 9"); 

    air.loop = true;
    wood.loop = true;
    boil.loop = true;
    thunder.loop = true;

    console.log("Hello world! 10"); 
    
    air.autoplay = true;
    wood.autoplay = true;
    boil.autoplay = true;
    thunder.autoplay = true;

    console.log("Hello world! 11"); 

      
    //green rain

     var play=0;

     ontouch(el1, function(evt, dir, phase, swipetype, distance,pointertype){
   
       if (play==0 && phase=="move") {wood.play();play=1;};
       if (play==1 && phase=="end") {wood.pause();play=0;} ;
         var touchreport = '';
         touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
         touchreport += '<b>Phase:</b> ' + phase + '; ';
         touchreport += '<b>Distance:</b> ' + distance + '<br />';
         el2.innerHTML = touchreport;

         console.log("Hello world! 12"); 
     });


 //air

 var play=0;

 ontouch(el3, function(evt, dir, phase, swipetype, distance,pointertype){

   if (play==0 && phase=="move") {air.play();play=1;};
   if (play==1 && phase=="end") {air.pause();play=0;} ;
     var touchreport = '';
     touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
     touchreport += '<b>Phase:</b> ' + phase + '; ';
     touchreport += '<b>Distance:</b> ' + distance + '<br />';
     el4.innerHTML = touchreport;

     console.log("Hello world! 13"); 
 });

  //boil

  var play=0;

  ontouch(el5, function(evt, dir, phase, swipetype, distance,pointertype){

    if (play==0 && phase=="move") {boil.play();play=1;};
    if (play==1 && phase=="end") {boil.pause();play=0;} ;
      var touchreport = '';
      touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
      touchreport += '<b>Phase:</b> ' + phase + '; ';
      touchreport += '<b>Distance:</b> ' + distance + '<br />';
      el6.innerHTML = touchreport;

      console.log("Hello world! 14"); 
  });

   //thunder

   var play=0;

   ontouch(el7, function(evt, dir, phase, swipetype, distance,pointertype){
 
     if (play==0 && phase=="move") {thunder.play();play=1;};
     if (play==1 && phase=="end") {thunder.pause();play=0;} ;
       var touchreport = '';
       touchreport += '<b>Pointer Type:</b> ' + pointertype + '; <b>Dir:</b> ' + dir + '; ';
       touchreport += '<b>Phase:</b> ' + phase + '; ';
       touchreport += '<b>Distance:</b> ' + distance + '<br />';
       el8.innerHTML = touchreport;

       console.log("Hello world! 15"); 
   });


    
}, false)
 

