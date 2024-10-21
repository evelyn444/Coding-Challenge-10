//Task 2:Add Event Listeners for Product Selection
const priceElement = document.getElementById('product-price');
const modelSelector = document.getElementById ('model-selector');
const purchaseButton = document.getElementById ('purchase-button');

modelSelector.addEventListener('change', function(event){ // changes price on screen depending what model customer chooses
    const selectedOption = modelSelector.options[modelSelector.selectedIndex];
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`; 
}
);
//Task 3: Handle Stock Availability
const stockAvailability = {
    normal: {price: 30, stock: 4},
    ripped: {price:35, stock:0},
    light: {price: 40, stock: 5} //stock availibility
};
//Task 4: Create a Checkout Event
purchaseButton.addEventListener ('click', function(){
    const selectedOption = modelSelector.options[modelSelector.selectedIndex];
    const stock = selectedOption.getAttribute('data-stock');
    
    if(stock > 0){ 
        alert('Thank you for purchasing'); //alerts if item is in stock and purchased
    }
    else {
        alert('Sorry this item is out of stock'); //alerts if item is out of stock
    }
});