function solve() {
   let productElement = document.querySelectorAll('.product');
   let outputElement = document.querySelector('textarea');
   let checkoutElements = document.querySelector('.checkout');
   let buttonElements = document.querySelectorAll('.add-product');
   let totalPrice = 0;
   let shoppingBag = [];

   function print () {
      outputElement.textContent += `You bought ${shoppingBag.join(', ')} for ${totalPrice.toFixed(2)}.`;
      buttonElements.forEach(e => e.setAttribute('disabled', ''));
      checkoutElements.setAttribute('disabled', '');
   }

   for(let el of productElement) {
      el.addEventListener('click', (e) => {
         let currEl = e.currentTarget.children[1].children[0].textContent;
         let price = e.currentTarget.children[3].textContent;
         price = Number(price);
         outputElement.textContent += `Added ${currEl} for ${price.toFixed(2)} to the cart.\n`;
         totalPrice += price;
         if(!shoppingBag.includes(currEl)) {
            shoppingBag.push(currEl);
         }
      });
   }
   checkoutElements.addEventListener('click', print);
}
