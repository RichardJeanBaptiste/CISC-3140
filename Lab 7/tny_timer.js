/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Richard Jean-Baptiste
   Date: 06/22/2020

*/

"use strict";

showClock();
setInterval(showClock, 1000);


function showClock(){
   // get current date and time
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
  
   // add current date/time to html
   document.getElementById('currentTime').innerHTML= "<span>" + localDate + "</span><span>" + localTime + "</span>";

   // get/set 4th of july date
   var j4Date = nextJuly4(thisDay);
   j4Date.setHours(21);
   console.log(j4Date);

   // calculate time until next 4th of july
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;
   console.log(secs);

   // add 4th of july calculations to html
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}