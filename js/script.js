(function($){
   $(function(){
    /* scroll to section */
    $(".jq--scroll-our-cakes").click(function(){
       $("html, body").animate({scrollTop: $(".jq--our-cakes").offset().top }, 1000); 
    }); 
    
    $(".jq--scroll-about-cakes").click(function(){
       $("html, body").animate({scrollTop: $(".jq--about-cakes").offset().top }, 1000); 
    });    
    
    $(".jq--scroll-references").click(function(){
       $("html, body").animate({scrollTop: $(".jq--references").offset().top }, 1200); 
    });    
       
    $(".jq--scroll-photogallery").click(function(){
       $("html, body").animate({scrollTop: $(".jq--photogallery").offset().top }, 1400); 
    });
    
    $(".jq--scroll-contact").click(function(){
       $("html, body").animate({scrollTop: $(".jq--contact").offset().top }, 1500); 
    });    
    
    $(".jq--scroll-button-jedna").click(function(){
       $("html, body").animate({scrollTop: $(".jq--our-cakes").offset().top }, 1000); 
    });
       
        
    $(".jq--scroll-button-dva").click(function(){
       $("html, body").animate({scrollTop: $(".jq--about-cakes").offset().top }, 1000); 
    });
       
       
    /*** MOBILE NAVIGATION ***/
       
    $(".jq--nav-icon").click(function(){
       $(".nav-background").fadeToggle();
       $(".mobile-nav-back").fadeToggle();
        $("nav ul").fadeToggle();
    });
    
    /* change hamburger to cross vice versa */
    $(".jq--image-hamburger").click(function(){
        
        if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")
        {
             $($(".jq--image-hamburger").attr("src","images/crossMenu.png")); 
        }   
        else 
        {
       $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
        }
         
    });   
       
});    
       

       
})(jQuery);