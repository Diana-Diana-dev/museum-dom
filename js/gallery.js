function fillGallery(img) {
  const galleryInnerContainer = document.querySelector('.gallery__inner-container');
  galleryInnerContainer.appendChild(img);
}

function createImg(path) {
  const img = document.createElement('img');
  img.classList.add('gallery__item')
  img.src = path;
  
  img.alt = 'path';
  return img;
}


const imgsLinks = [
  "./assets/img/galery2_1.png",
  "./assets/img/galery9_1.png",
  "./assets/img/galery4_1.png",
  "./assets/img/galery6_1.png",
  "./assets/img/galery1_1.png",
  "./assets/img/galery8_1.png",
  "./assets/img/galery3_1.png",
  "./assets/img/galery5_1.png",
  "./assets/img/galery7_1.png",
  "./assets/img/galery10_1.png", 
  "./assets/img/galery12_1.png",
  "./assets/img/galery15_1.png",
]

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(imgsLinks);

imgsLinks.map(createImg).forEach(fillGallery);