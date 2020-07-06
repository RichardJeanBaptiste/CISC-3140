"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Richard Jean-Baptiste
   Date:  07/04/2020 
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener('load',function(){

   calcCart();
   var cartForm = document.forms.cart;
   cartForm.elements.modelQty.addEventListener('change',calcCart);
   var sOptions = document.querySelectorAll('input[name="shipping"]');
   for(var i = 0; i < sOptions.length; i++){
      sOptions[i].addEventListener("click", calcCart);
   }
})

function calcCart(){

   var modelCost = document.forms.cart.elements.modelCost.value;
   var modelQty = document.forms.cart.elements.modelQty.value;
   var orderCost = modelCost * modelQty;

   document.forms.cart.elements.orderCost.value = formatUSCurrency(orderCost);

   var shipCost = (document.querySelector('input[name="shipping"]:checked').value) * modelQty;
   document.forms.cart.elements.shippingCost.value = formatNumber(shipCost, 2);

   var subTotal = orderCost + shipCost*1;
   var salesTax = 0.05 * subTotal;
   document.forms.cart.elements.salesTax.value = formatNumber(salesTax, 2);

   document.forms.cart.elements.subTotal.value = formatNumber(subTotal, 2);

   var cartTotal = (orderCost * 1 ) + (shipCost * 1) + (salesTax * 1);
   document.forms.cart.elements.cartTotal.value = formatUSCurrency(cartTotal);

   document.forms.cart.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').parentElement.textContent;
}








function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
