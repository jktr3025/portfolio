$(function(){
    setInterval(function(){

    $(".world").css({"background-position":"-=10"});
    
}, 50)//setInterval


$({val:0}).animate({val:100}, {duration:6000, step : function(){
    $(".progress1").text(Math.floor(this.val));
    $(".progress1").css({color:"#fff"})
}, 
complete:function(){
    $(".progress1").text(Math.floor(this.val));
}
})//progress1

})//jquery  