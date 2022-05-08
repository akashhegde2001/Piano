for(var i=0;i<17;i++)
   document.querySelectorAll("button")[i].addEventListener("click",play_sound);

   function play_sound()
   {
       var drum_name = this.innerHTML;
       makesound(drum_name);
       anim(drum_name);
      
   }

   document.addEventListener("keypress",keysound);
   function keysound()
   {
       makesound(event.key);
       anim(event.key);
       
   }
   function makesound(key)
   {
    switch(key)
    {
        case 'A':
             var audio = new Audio('sounds/C4.mp3');
             audio.play();
             break;
        case 'S':
             var audio = new Audio('sounds/D4.mp3');
             audio.play();
             break;
         case 'D':
             var audio = new Audio('sounds/E4.mp3');
             audio.play();
             break;
         case 'F':
              var audio = new Audio('sounds/F4.mp3');
             audio.play();
             break;
         case 'G':
             var audio = new Audio('sounds/G4.mp3');
             audio.play();
             break;  
         case 'B':
             var audio = new Audio('sounds/A4.mp3');
             audio.play();
             break; 
        case 'H':
             var audio = new Audio('sounds/B4.mp3');
             audio.play();
             break; 
        case 'J':
            var audio = new Audio('sounds/C5.mp3');
            audio.play();
            break;
        case 'K':
            var audio = new Audio('sounds/D5.mp3');
            audio.play();
            break;
        case 'L':
            var audio = new Audio('sounds/E5.mp3');
            audio.play();
            break;
            case 'W':
                var audio = new Audio('sounds/Db4.mp3');
               audio.play();
               break;
           case 'E':
               var audio = new Audio('sounds/Eb4.mp3');
               audio.play();
               break;  
           case 'T':
               var audio = new Audio('sounds/Gb4.mp3');
               audio.play();
               break; 
          case 'Y':
               var audio = new Audio('sounds/Ab4.mp3');
               audio.play();
               break; 
          case 'U':
              var audio = new Audio('sounds/Bb4.mp3');
              audio.play();
              break;
          case 'O':
              var audio = new Audio('sounds/Db5.mp3');
              audio.play();
              break;
          case 'P':
              var audio = new Audio('sounds/Eb5.mp3');
              audio.play();
              break;
    }
   }

   function anim(pressed_key)
    {
        var activeButton=document.querySelector("."+pressed_key)
        activeButton.classList.add("pressed");
        setTimeout(remove_effect,100);
        function remove_effect()
        {
            activeButton.classList.remove("pressed");
        }
    
    }
