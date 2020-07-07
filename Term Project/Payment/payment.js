window.addEventListener('load',function(){

    var orderData = location.search.slice(1);
    orderData = orderData.replace(/\+/g," ");
    orderData = decodeURIComponent(orderData);
    var orderFields = orderData.split(/[&=]/g);
    console.log(orderFields);
    var currMeal = orderFields[5].slice(0, -6);
    var currSmoothie = orderFields[7].slice(0, -6);
    document.getElementById("order").innerHTML = "<p>" + currMeal + "<br/>" + currSmoothie + "</p>";
    document.getElementById("price").value = orderFields[9];
    document.getElementById("tax").value = orderFields[11];
    document.getElementById("total").value = orderFields[13];
    document.getElementById("formSbmt").addEventListener('click',function (){
        validateName();
        validateDate();
        validateNumber();
        validateCVC();
    })
});

function validateName(){
    var name = document.getElementById("name");
    if(name.validity.valueMissing){
        name.setCustomValidity("Enter your name!");
    }else{
        name.setCustomValidity("");
    }
}

function validateNumber(){
    var number = document.getElementById("cardNum");
    if(number.validity.valueMissing){
        number.setCustomValidity("Enter your card number!");
    }else{
        number.setCustomValidity("");
    }
}

function validateDate(){
    var expDate = document.getElementById("expDate");
    if(expDate.validity.valueMissing){
        expDate.setCustomValidity("Enter your expiration date!");
    }else{
        expDate.setCustomValidity("");
    }
}

function validateCVC(){
    var cvc = document.getElementById("cvc");
    if(cvc.validity.valueMissing){
        cvc.setCustomValidity("Enter your security code!");
    }else{
        cvc.setCustomValidity("");
    }
}
