// Everything OK? 
console.log('OK');

/******************************
Random Image
******************************/
const images = [
    `img/rando-1.jpg`,
    `img/rando-2.jpg`,
    `img/rando-3.jpg`
  ];
  
  console.log(images);
  
  // Get Random Number
  let numRand;
  let max = 3;
  numRand = Math.floor(Math.random() * max );
  
  // Get element
  const imgSrc = document.querySelector('#rando-image');
  console.log( imgSrc );
  
  // Set `src` name from stored values
  imgSrc.src = images[numRand];

/******************************
Flickity Slider/Carousel
******************************/
const slideContainer = document.querySelector('.carousel');
var flkty = new Flickity( slideContainer );

/******************************
Splitting JS
******************************/
Splitting({
  target: 'h1'
});

/******************************
Light Gallery JS
******************************/
const galleryContainer = document.getElementById('galleryContainer');

lightGallery(galleryContainer);