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
