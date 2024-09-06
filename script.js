var gallery;

gallery = [
  'images/prado.jpg', 
  'images/Botanico.jpg', 
  'images/Deboh.jpg', 
  'images/Palacio.jpg', 
  'images/sol1.jpg',
  'images/PlazaToros.jpg', 
  'images/retiro.webp',
  'images/madrid.avif',
  'images/Cristal.jpg',
  'images/teleferico.webp',
  'images/pantano.jpg',
  'images/cristalNoche.webp',
  'images/madrid1.avif',
  'images/madrid6.avif',
  'images/cibeles.webp',
  'images/palacio2.jpg',
  'images/sabatini.jpg',
  'images/sol1.jpg',
  'images/toledo.avif'
];

let element_img_container = document.getElementById('img-container');
element_img_container.setAttribute("src", gallery[0]);

document.getElementById('next').addEventListener('click', (event) => {
  let element_img_container2 = document.getElementById('img-container');
  if (gallery.length != 0) {
    gallery.push(gallery.shift());
  }
  element_img_container2.setAttribute("src", gallery[0]);
});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_img_container3 = document.getElementById('img-container');
  element_img_container3.setAttribute("src", gallery.slice(-1)[0]);
  if (gallery.length != 0) {
    gallery.unshift(gallery.pop());
  }
});
