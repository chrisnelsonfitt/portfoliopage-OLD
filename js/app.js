var form = $("#forms");
var lightbox = $("#lightbox");
var photography = $("#photography");
var responsive = $("#responsive");
var video_player = $("#video-player");
var web_app = $("#web-app");
var svg = $("#svg");
var design = $("#design");
var accessible = $("#accessible");
var js_enable = $(".js-enabled");

//Remove Link and allow Ajax to run
js_enable.attr('href', '#');

// Pull Ajax Fills 
form.click(function(){
        
        $(".portfolio-full").load("ajax-files/form.html"); 
        
});

lightbox.click(function(){
    $(".portfolio-full").load("ajax-files/lightbox.html");
});

photography.click(function(){
    $(".portfolio-full").load("ajax-files/photography.html");
});

responsive.click(function(){
    $(".portfolio-full").load("ajax-files/responsive.html");   
});

video_player.click(function(){
    $(".portfolio-full").load("ajax-files/video.html");  
});

web_app.click(function(){
    $(".portfolio-full").load("ajax-files/web-app.html");
   
});

svg.click(function(){
    $(".portfolio-full").load("ajax-files/svg.html");  
});

design.click(function(){
    $(".portfolio-full").load("ajax-files/design.html");  
});


accessible.click(function(){
    $(".portfolio-full").load("ajax-files/accessible.html"); 
});
// Hide Portfolio Page 
$(".gallery-item").click(function(){
    $(".close-expand").css("display","inherit");
    $(".gallery-container , .header").css("display","none");
    $(".go-back").hide();
});
// Show Portfolio Page 
$(".back").click(function(){
     $(".portfolio-expand").css("display","none");
     $(".gallery-container , .header").css("display","flex");
     $(".go-back").show();
});