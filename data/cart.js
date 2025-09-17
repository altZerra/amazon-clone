export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  Quantity:2,
  deliveryOptionId:'1'
} ,
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  Quantity:1,
  deliveryOptionId:'2'
}

];
}

export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId,quantity){
    let matchingItem;
   cart.forEach((cartItem)=>{
    if(productId===cartItem.productId)
    {
      matchingItem=cartItem; 
    }

   });
   if(matchingItem)
   {
    matchingItem.Quantity+=1;
   }
   else{
   cart.push({

    productId:productId,
    Quantity:quantity,
    deliveryOptionId:'1'

   }); 

  }
 
  saveToStorage();
}


export function removeFromCart(productId){
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      if (cartItem.Quantity > 1) {
        // Decrement quantity
        newCart.push({
          productId: cartItem.productId,
          Quantity: cartItem.Quantity - 1,    
          deliveryOptionId:'1'
        });
      }
      // If Quantity is 1, do not push (removes the item)
    } else {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

export function updateCartQuantity(){
    let cartQuantity=0;
  cart.forEach((item)=>{
    cartQuantity += item.Quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
  if(document.querySelector('.js-items'))
  {
  document.querySelector('.js-items').innerHTML=`${cartQuantity} items`;
  }
  
}


export function updateDeliveryOption(productId,deliveryOptionId){

 let matchingItem;
   cart.forEach((cartItem)=>{
    if(productId===cartItem.productId)
    {
      matchingItem=cartItem; 
    }

});
matchingItem.deliveryOptionId=deliveryOptionId;
saveToStorage();
}