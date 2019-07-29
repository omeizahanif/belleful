let appState = {};
let item = [{
    food : 'Jollof',
    price : '$10',
    quantity: 3
},
           {
    food : 'Beans',
    price : '$20',
    quantity: 2
},
           {
    food : 'Fried Rice',
    price : '$50',
    quantity: 1
}];

//Tray constructor function
let Tray = (function () {
    this.item = new Array();
    });

    let FoodItem = (function (food, price, quantity) {
    this.food = food;
    this.price = price;
    this.quantity = quantity;
    });

let currentTray = null;

const addToTray = (e) => {
    let parent = e.target.parentElement;
    let order = {
        'food' : parent.children[1].textContent,
        'price' : parent.children[2].firstChild.textContent,
        'quantity' : parent.children[2].lastChild.value
    };
    item.push(order);
    return item;
};

const getTrayData = () => {  
    //create tray and food item constructor functions
    currentTray = JSON.parse(localStorage.getItem('tray'));
    if (!currentTray) {
        createNewTray();
    }
}


const alertUser = () => {};
const fetchOrder = () => {};

const createNewTray() {
    localStorage.clear();
    localStorage.setItem('tray', JSON.stringify(new Tray()));
    currentTray = JSON.parse(localStorage.getItem('tray'));
    
}

let addFoodBtn = document.querySelectorAll('.add-tray');
addFoodBtn.forEach(function(button) {
    button.addEventListener('click', addToTray);
});


