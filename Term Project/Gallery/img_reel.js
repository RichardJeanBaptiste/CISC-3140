'use strict';

var count = 1;

window.addEventListener('load',function(){
    
    setInterval(function(){
        var currImg = "./gal_imgs/img";
        currImg = currImg + count + ".jpeg";
        document.getElementById("myImage").src = currImg;
        if(count === 8){
            count = 1;
        }else{
            count++;
        }
    },2000);
   
});

