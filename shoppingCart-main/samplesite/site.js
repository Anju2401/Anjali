const data= [
    {
        id : 0,
        img : 'images/redmiK20.jpg',
        name : 'Redmi K20',
        price : 19000,
        save : 2500,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : 'images/samGalaxynote20.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 30000,
        save : 3000,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : 'images/oppofindX2.jpg',
        name : 'OPPO Find X2',
        price : 24000,
        save : 1999,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : 'images/realmeX20pro.jpg',
        name : 'Realme X50 Pro',
        price : 28500,
        save : 2300,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : 'images/redminote8.jpg',
        name : 'Redmi Note 8',
        price : 20000,
        save : 1500,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : 'images/redminote9.jpg',
        name : 'Redmi Note 9',
        price : 22000,
        save : 1999,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : 'images/redmi8.jpg',
        name : 'Redmi 8A Dual',
        price : 16000,
        save : 1685,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 25000,
        save : 798,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : 'images/realme C11.jpg',
        name : 'readme C11',
        price : 15000,
        save : 1685,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : 'images/realmeNarzo.jpg',
        name : 'realmeNarzo',
        price : 21000,
        save : 3200,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : 'images/realme7i.jpg',
        name : 'realme7i',
        price : 33000,
        save : 2950,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : 'images/realmeC15.jpg',
        name : 'realmeC15',
        price : 35000,
        save : 1650,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 12,
        img : 'images/oppoA31.jpg',
        name : 'oppoA31',
        price : 28000,
        save : 1990,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 13,
        img : 'images/oppA5s.jpg',
        name : 'oppA5s',
        price : 19000,
        save : 1830,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 14,
        img : 'images/oppoF17.jpg',
        name : 'oppoF17',
        price : 30000,
        save : 1430,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 15,
        img : 'images/oppoA15.jpg',
        name : 'oppoA15',
        price : 27000,
        save : 1599,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 16,
        img : 'images/samgalaxyM01.jpg',
        name : 'samgalaxyM01',
        price : 31000,
        save : 1800,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 17,
        img : 'images/samGalaxyM21.jpg',
        name : 'samGalaxyM21',
        price : 40000,
        save : 1490,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 18,
        img : 'images/samsGalaxyNote20.jpg',
        name : 'samsGalaxyNote20',
        price : 29000,
        save : 2301,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 19,
        img : 'images/samGalaxys20+.jpg',
        name : 'samGalaxys20+',
        price : 35000,
        save : 2199,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    
    
];

let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})


//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : &#x20B9;'  +data[getId].price;
    youSave.innerHTML= 'You save : (&#x20B9; ' + data[getId].save + ')';
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : &#x20B9; ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : &#x20B9; ' + totalSaving;
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}

