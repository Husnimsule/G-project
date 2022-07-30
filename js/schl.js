
let product = [
    {
        name: 'Aloevera and Honey Extract',
        tag: 'Alovera and honey',
        price: 3800,
        inCart:0,
       
    },
    {
        name: 'Soap',
        tag: 'Cream Jar Mockup',
        price: 155,
        inCart:0,
       
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
//function call,gets product details
setItems(product);
    
        function setItems(product){
            // console.log("Inside of setItems function ");
            // console.log("My product is",product);
           
            let cartItems = localStorage.getItem('productsInCart'); 
            cartItems = JSON.parse(cartItems); 
            // console.log("My cartitems are",cartItems);

            if(cartItems  != null){
                // cartItems['']
                //
                if(cartItems[product.tag] == undefined){
                    //updte the cart to be a js object i.e update localstorage
                    cartItems = {
                        //"..." used to make shallow copies of JS objects
                        ...cartItems,
                        [product.tag]: product
                    }
                }
                cartItems[product.tag].inCart += 1;
            }else {

            
            product.inCart =+1;
             cartItems = {
                [product.tag]:product
            }
        }
    
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        }

let totalPrice = function totalCost(product){
    // console.log("the products price",product.price);

    //checks if there's sth in the local storage
    let cartCost =localStorage.getItem('totalCost');


    //whenever we get sth from the local storage, it comes as a string
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);

            localStorage.setItem('totalCost',cartCost + product.price);
    } else{
    localStorage.setItem("totalCost",product.price);
    }
}

//checks if there are products in the localstorage
function displayCart(){
        let cartItems= localStorage.getItem('productsInCart');
         cartItems = JSON.parse(cartItems);
        // console.log(cartItems);

        let productContainer = document.querySelector(".products")
        //checks if cartitems exist in the localstorage
        console.log(cartItems);

        if(cartItems && productContainer ){
                // console.log('running');
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                     <div class="product"> 
                    <div class="soap">
                    <img src="../images/${item.tag}.svg" style="width:200px; height:200px;">
                    </div>
                    <div class="soap">
                    <span>${item.name}</span>
                    </div>
                    <div class="soap2">
                      <button>-</button>
                       <p><b>1</b></p> 
                       <button>+</button>
                      </div>
                    <div class="soap">
                    <span>$${item.price}</span>
                      <p class="remove">remove</p>
                    </div>
                    <div class="total">
                $${item.inCart * item.price},00
                </div>
                  </div> 

                    `;
                    // totalCost(products[i]);
                })
        }
}

onLoadCartsNumbers();
displayCart();
