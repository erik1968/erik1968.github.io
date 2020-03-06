console.log('OK');

// variables
const trigger = document.querySelector('#trigger');
const target = document.querySelector('main');

trigger.addEventListener('click', () => {
  
//   All the good stuff
   target.classList.toggle('grid');
  
});
