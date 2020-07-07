'use strict';

var date = new Date(); 


document.getElementById("calender").innerHTML = createCalender(date);

function createCalender(calDate){
    
    var calenderHTML = "<table id='calenderTable' >";
    calenderHTML += calWeekdayRow();
    calenderHTML += calDays(calDate);
    calenderHTML += "</table>";
    return calenderHTML;
}

function calWeekdayRow(){

    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var rowHTML = "<tr>";

    for(var i = 0; i < dayName.length; i++){
        rowHTML += "<th id='calenderWeekdays'>" + dayName[i] + "</th>";
    }

    rowHTML += "</tr>";

    return rowHTML;

}

function daysInMonth(calDays){

    var dayCount=[31,28,31,30,31,30,31,31,30,31,30,31];

    var thisYear = calDays.getFullYear();
    var thisMonth = calDays.getMonth();


    return dayCount[thisMonth];
}

function calDays(calDate){

    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();

    var htmlCode = "<tr>";

    for(var i = 0; i < weekDay; i++){
        htmlCode += "<td></td>";
    }

    var totalDays = daysInMonth(calDate);

    var highlightDay = calDate.getDate();

    for(var i = 1; i < totalDays; i++){  
        day.setDate(i);
        weekDay = day.getDay();

        if(weekDay === 0){
            htmlCode += "<tr>";
        }

        if(i===highlightDay){
            htmlCode += "<td class='calenderDates' id='calenderToday'>" + i + "   " + events[i] +  "</td>";
        }else{
            htmlCode += "<td class='calenderDates'>" + i +  "   " + events[i] + "</td>";
        }

        if(weekDay==6){
            htmlCode += "</tr>";
        }
    }

    return htmlCode;

}