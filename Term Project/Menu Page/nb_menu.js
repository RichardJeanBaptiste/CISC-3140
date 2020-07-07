"use strict";

window.onload = startUp();

function startUp(){

    document.getElementById("loginSbmt").addEventListener('click',loginHandler);
    document.getElementById("meals").addEventListener('change',orderCost);
    document.getElementById("smoothies").addEventListener('change',orderCost);
   
}


function loginHandler(){
    var name = document.getElementById('username').value;
    var form = document.getElementById("loginForm");
    var text = "Welcome, " + name; 
    var welcomeText = document.createTextNode(text);
    form.appendChild(welcomeText);
    document.getElementById("login").style.visibility = "hidden";
}

function orderCost(){

    var mealAmt = document.getElementById("meals").value;
    var smoothieAmt = document.getElementById("smoothies").value;
    var tax = .08;

    var price = (mealAmt * 1) + (smoothieAmt * 1);
    document.getElementById("price").value = formatUSCurrency(price);

    var orderTax = tax * price;
    document.getElementById("tax").value = formatUSCurrency(orderTax);

    var total = price + orderTax;
    document.getElementById("total").value = formatUSCurrency(total);

    var meals = document.getElementById("meals");
    var mealName = meals.options[meals.selectedIndex].text;
    var smoothies = document.getElementById("smoothies");
    var smoothieName = smoothies.options[smoothies.selectedIndex].text;
    
    document.getElementById("mealName").value = mealName;
    document.getElementById("smoothieName").value = smoothieName;

}
 
function formatUSCurrency(val) {
    return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
 }