(function() 
{
   
    window.addEventListener("DOMContentLoaded", Ready)

    function Ready() 
    {
        const $video = document.getElementById("video"),
        $play = document.getElementById("play"),
        $pause = document.getElementById("pause"),
        $backward = document.getElementById("backward"),
        $forward= document.getElementById("forward"),
        $progress = document.getElementById("rango")
        
        
        $play.addEventListener("click", handlePlay);
        
        function handlePlay() 
        {
            $video.play();
            $play.hidden = true;
            $pause.hidden = false;


            $backward.disabled = false
            $forward.disabled = false


        }
        
        
        $pause.addEventListener("click", handlePause);
        
        function handlePause() 
        {
            $video.pause();
            $play.hidden = false;
            $pause.hidden = true;
        }    


        $backward.addEventListener("click", handleBackward);

        function handleBackward() {
            $video.currentTime -= 10;   
        }

        $forward.addEventListener("click", handleForward);

        function handleForward() {
            $video.currentTime += 10;  
        }




        $video.addEventListener("loadedmetadata", handleLoaded)
        $video.addEventListener("timeupdate", handleTimeUpdate)

        function handleLoaded() 
        {
            $progress.max = $video.duration
        }

        function handleTimeUpdate() 
        {
            $progress.value = $video.currentTime    
        }


        $progress.addEventListener("input", handleInput)

        function handleInput() 
        {
            $video.currentTime = $progress.value
            console.log($progress.value);
        }


    }

 




    
})();