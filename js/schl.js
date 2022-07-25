
let product = [
    {
        name:"red",
        price:123,
    },
];
let carts = document.querySelectorAll('.add-to-cart');

for(i=0; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(product[i]);
        totalCost(product[i]);
    });

}

function onLoadCartsNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
    document.querySelector('.cart-quantity').textContent= productNumbers;
}
}

function cartNumbers (_product) {
    let productNumbers = localStorage.getItem('cartNumbers');

     productNumbers =  parseInt(productNumbers);
    
     if(productNumbers){
         localStorage.setItem('cartNumbers',productNumbers + 1);
         document.querySelector('.cart-quantity').textContent =productNumbers + 1;
     }
     else{
         localStorage.setItem ('cartNumbers', 1);
         document.querySelector('.cart-quantity').textContent = 1
     }
}

onLoadCartsNumbers();