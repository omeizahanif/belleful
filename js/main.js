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

const createTrayData = () => {  
    let ul = document.createElement('ul');
    ul.classList.add('tray-item');
    let li = document.createElement('li');
    for (let i = 0; i < 4; i++) {
        ul.append(li);
    }
    return ul;
}

const displayTray = (array) => {
    let ulElement;
    let ulDisplay;
    let data = [...array];
    let tray = document.querySelector('#tray');
    for (let i of data) {
        ulElement = createTrayData();
        
        //tray.append(ulElement);
    }
    return true;
           
};
const alertUser = () => {};
const fetchOrder = () => {};


let addFoodBtn = document.querySelectorAll('.add-tray');
addFoodBtn.forEach(function(button) {
    button.addEventListener('click', addToTray);
});


