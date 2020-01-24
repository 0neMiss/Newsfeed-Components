/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.\


  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
//declaring function to evaluate on array
let menuComponentCreate = (array) => {
  //creating elements
  let menu = document.createElement('div');
  let ul = document.createElement('ul');
  //applying the class to the menu element
  menu.classList.add('menu');
  //making a list element for each item in the array passed through menuComponentCreate
  for (i = 0; i < array.length; i++) {
    let l = document.createElement('li');
    //assigning the inner html to be equal to the item inside the array we are curently evaluating
    l.innerHTML = array[i];
    //appending that list item to the ul element
    ul.appendChild(l);
  }

  //selecting the menu-button class
  let menuButton = document.querySelector('.menu-button');
  //adding event listener to toggle classes
  menuButton.addEventListener('click', (event) => {

    menu.classList.toggle('menu--open');
  });
  //appending the ul to the menu
  menu.appendChild(ul);
  //returning the menu
  return menu;


};
//selecting the header
let body = document.querySelector('body');
//creating a variable to append to the header
let menu_component = menuComponentCreate(menuItems);
//appending variable to header
body.prepend(menu_component);
