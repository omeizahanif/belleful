let orderTray = document.querySelector('#tray ul');

//Tray constructor function
/*let Tray = (function () {
    this.item = new Array();
    });

let FoodItem = (function (food, price, quantity) {
    this.food = food;
    this.price = price;
    this.quantity = quantity;
    });

let currentTray = null;


const getTrayData = () => {  
    //create tray and food item constructor functions
    currentTray = JSON.parse(localStorage.getItem('tray'));
    if (!currentTray) {
        createNewTray();
    }
}


const alertUser = () => {};
const fetchOrder = () => {};

const createNewTray = ()  => {
    localStorage.clear();
    localStorage.setItem('tray', JSON.stringify(new Tray()));
    currentTray = JSON.parse(localStorage.getItem('tray'));
    
};*/




const addToTray = (e) => {
    let parent = e.target.parentElement;
    let order = {
        'food' : parent.children[1].textContent,
        'price' : parent.children[2].firstChild.textContent,
        'quantity' : parent.children[2].lastChild.value
    };
    console.log(order);
    updateTrayUI(order);
    return true;
};

const updateTrayUI = (product) => {
    //orderTray.innerHTML = '';
    let liElement = document.createElement('li');
    let html = `<span>${product.food}</span> 
                <span>${product.price}</span> 
                <span>${product.quantity}</span><br>`;
    liElement.innerHTML = html;
    orderTray.appendChild(liElement);
    console.log(orderTray);
    return true;
    
}
let addFoodBtn = document.querySelectorAll('.add-tray');
addFoodBtn.forEach(function(button) {
    button.addEventListener('click', (e) => addToTray(e));
});




