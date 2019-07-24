
let appState = {};
let item = [];
      /*
        food
        - name
        - price
        - quantity
      */
      
let addFoodBtn = document.querySelectorAll('.add-tray');
      
const addToTray = (e) => {
          let parent = e.target.parentElement;
          item.push(order);
          return item;
};

const displayTray = () => {};
const alertUser = ({object}) => {};
const fetchOrder = () => {};


      

      
addFoodBtn.forEach(function(button) {
    button.addEventListener('click', addToTray);
});