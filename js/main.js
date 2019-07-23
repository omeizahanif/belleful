
let appState = {};
      /*
        food
        - name
        - price
        - quantity
      */
      
      let addFoodBtn = document.querySelectorAll('.add-tray');
      
      const addToTray = (e) => {
          let a;
          let item = [];
          let parent = e.target.parentElement;
          for (let i = 0; i < parent.length; i++) {
              
          }
          a += '{
              'food' : parent.children[1].textContent,
              'price' : parent.children[2].firstChild.textContent,
              'quantity' : parent.children[2].lastChild.value
          }';
          item.push(a);
          console.log(item);
      };
      
      addFoodBtn.forEach(function(button) {
          button.addEventListener('click', addToTray);
      });