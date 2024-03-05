$(function(){

    if($(window).width() > 390){ 
        
        $('#fullpage').fullpage({
                //options here
                autoScrolling: true,
                scrollHorizontally: true,
                // navigation: true,
                menu: ".menu",
                anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],
                
            },
            $(".menu li a").click(function(){
                var n= $(".menu li a").index(this);
                console.log("n:",n)
                switch(n){
                    case 0 : $("#indicator").css({left: "5.2%", opacity:1})
                    break;
                    case 1 : $("#indicator").css({left: "38.7%", opacity:1})
                    break;
                    case 2 : $("#indicator").css({left: "73.3%", opacity:1})
                }
            }),//$(".menu li a").click
            $(".logo").click(function(){
                $("#indicator").css({opacity:0})
            })//logo").click




            
            )//fullpage
        }//if390보다 클 때

})//jquery
