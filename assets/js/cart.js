// Script de panier ebay
console.log("cart.js loaded");

    let span = document.getElementById("GFG_Span"); 
    function myFunction99() {
    total = span.textContent;
    let mylink = "https://www.paypal.com/donate/?business=5XE4BPM86Q56L&amount=" + total + "&no_recurring=1&item_name=upgdayz.com&currency_code=USD";
    window.open(mylink);
    }
