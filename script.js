
// script.js
const buttonGroup = document.getElementById('button-group');
const cartElement = document.getElementById('shopping-cart');
const totalSpan = document.getElementById('total-span');

let total = 0;

// Listen for clicks on the entire group
buttonGroup.addEventListener('click', (event) => {
    // Make sure the click was on a button, not the space between buttons
    const btn = event.target.closest('button');
    if (!btn) return;

    // Get the text from the button (e.g., "🍿 Popcorn: $4.50")
    const btnText = btn.textContent.trim();
    
    // Split the text to get the Name and the Price
    // This looks for the "$" and takes everything after it
    const parts = btnText.split('$');
    const snackName = parts[0].split(':')[0].trim();
    const price = parseFloat(parts[1]);

    // Update the Total
    total += price;
    totalSpan.innerText = total.toFixed(2);

    // Create a new item in the list
    const orderItem = document.createElement('p');
    orderItem.className = "text-lg border-b border-gray-200 py-1";
    orderItem.innerHTML = `<strong>${snackName}</strong> - $${price.toFixed(2)}`;
    
    cartElement.appendChild(orderItem);
});