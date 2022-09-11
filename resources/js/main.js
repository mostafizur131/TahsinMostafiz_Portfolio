$(document).ready(function(){
    
    //STICKY MENU
    
    $(".js--sticky-nav").waypoint(function(direction){
        
        if (direction == "down"){
            
            $("nav").addClass("sticky");
           
           } else {
               $("nav").removeClass("sticky");
           }
    });
    
    
    // ACTIVE LINK
    
    $("nav ul li").click(function(){
        $("nav ul li").removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav a p").click(function(){
        $("nav ul li").removeClass("active");
        $("nav ul li:first-child").addClass("active");
    });
    
    
    //SMOOTH SCROLL FOR IE/ EDGE / SAFARI
    
    $("a").on('click', function(event){
        
        if (this.hash !== ""){
                event.preventDefault();
            
                var hash = this.hash;
            
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
                });
        }
    });
    
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}