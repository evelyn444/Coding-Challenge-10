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
//Task 2: Handle Stock Availability
const stockAvailability = {
    normal: {price: 30, stock: 4},
    ripped: {price:35, stock:0},
    light wash: {price: 40, stock: 5}
};