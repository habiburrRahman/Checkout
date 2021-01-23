//First product price increasing code go here
document.getElementById("increment-one").addEventListener("click",function(){
    
   const priceOne = parseFloat( document.getElementById("price-one").innerText);
   const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
   const totalPrice = parseFloat( document.getElementById("total").innerText);
   const quantityOne = parseFloat(document.getElementById("quantity-one").value);

   //updating price of first product
   let firstProductAmnt = 1219;
   let quantityAmnt = 1;
   const plusPrice = priceOne + firstProductAmnt;
   document.getElementById("price-one").innerText = plusPrice;

   const plusPrice1 = subtotalPrice + firstProductAmnt;
   document.getElementById("subtotal").innerText = plusPrice1;

   const plusPrice2 = totalPrice + firstProductAmnt;
   document.getElementById("total").innerText = plusPrice2;

   const quantityTotal = quantityOne + quantityAmnt;
    document.getElementById("quantity-one").value = quantityTotal;
});

//Frist product price decreasing code go here
document.getElementById("decrement-one").addEventListener("click",function(){
   const priceOne = parseFloat( document.getElementById("price-one").innerText);
   const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
   const totalPrice = parseFloat( document.getElementById("total").innerText);
   const quantityOne = parseFloat(document.getElementById("quantity-one").value);

   //updating price of first product
   let firstProductAmnt = 1219;
   let quantityAmnt = 1;
   const plusPrice = priceOne - firstProductAmnt;
   document.getElementById("price-one").innerText = plusPrice;

   const plusPrice1 = subtotalPrice - firstProductAmnt;
   document.getElementById("subtotal").innerText = plusPrice1;

   const plusPrice2 = totalPrice - firstProductAmnt;
   document.getElementById("total").innerText = plusPrice2;

   const quantityTotal = quantityOne - quantityAmnt;
   document.getElementById("quantity-one").value = quantityTotal;
});





//Second product price increasing code go here
const incrementTwo = document.getElementById("increment-two");
incrementTwo.addEventListener("click",function(){
   const priceTwo = parseFloat( document.getElementById("price-two").innerText);
   const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
   const totalPrice = parseFloat( document.getElementById("total").innerText);
   const quantityTwo = parseFloat(document.getElementById("quantity-two").value);
   //updating price of second product
   let secondProductAmnt = 59;
   let quantityAmnt = 1;
   const plusPrice = priceTwo + secondProductAmnt;
   document.getElementById("price-two").innerText = plusPrice;

   const plusPrice1 = subtotalPrice + secondProductAmnt;
   document.getElementById("subtotal").innerText = plusPrice1;

   const plusPrice2 = totalPrice + secondProductAmnt;
   document.getElementById("total").innerText = plusPrice2;

   const quantityTotal = quantityTwo + quantityAmnt;
   document.getElementById("quantity-two").value = quantityTotal;
});


//Second product price decreasing code go here
const decrementTne = document.getElementById("decrement-two");
decrementTne.addEventListener("click",function(){
   const priceTwo = parseFloat( document.getElementById("price-two").innerText);
   const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
   const totalPrice = parseFloat( document.getElementById("total").innerText);
   const quantityTwo = parseFloat(document.getElementById("quantity-two").value);

   //updating price of second product
   let secondProductAmnt = 59;
   let quantityAmnt = 1;
   const plusPrice = priceTwo - secondProductAmnt;
   document.getElementById("price-two").innerText = plusPrice;

   const plusPrice1 = subtotalPrice - secondProductAmnt;
   document.getElementById("subtotal").innerText = plusPrice1;

   const plusPrice2 = totalPrice - secondProductAmnt;
   document.getElementById("total").innerText = plusPrice2;

   const quantityTotal = quantityTwo - quantityAmnt;
   document.getElementById("quantity-two").value = quantityTotal;
});










// Product one removing code go here
document.getElementById("remove-one").addEventListener("click",function(){
    const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
    const priceOne = parseFloat( document.getElementById("price-one").innerText);
    const subtotal = subtotalPrice - priceOne;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total").innerText = subtotal;

    document.getElementById("product-one").style.display = "none";
});

// Product two removing code go here
document.getElementById("remove-two").addEventListener("click",function(){
    const subtotalPrice = parseFloat( document.getElementById("subtotal").innerText);
    const priceTwo = parseFloat( document.getElementById("price-two").innerText);
    const subtotal = subtotalPrice - priceTwo;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total").innerText = subtotal;

    document.getElementById("product-two").style.display = "none";
});