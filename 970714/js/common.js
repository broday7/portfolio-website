$(function(){
    let currentIndex=0;
    setInterval(function(){
        currentIndex++;
        $(".sliderwrap").animate(-currentIndex*1080+"px");
    },1000);
});