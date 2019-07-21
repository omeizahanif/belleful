
let appState = {};
      /*
        food
        - name
        - price
        - quantity
      */
      
      let addFoodBtn = document.querySelectorAll('.add-tray');
      
      const addToTray = (e) => {
          let foodArticle = document.querySelectorAll('.food-article');
          let item = {};
          /*item = foodArticle.map((article) => {
              
          });*/
          console.log('clicked');
      };
      
      addFoodBtn.forEach(function(button) {
          button.addEventListener('click', addToTray);
      });