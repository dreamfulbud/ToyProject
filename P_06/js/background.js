const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style.backgroundImage = `url('img/${chosenImg}')`;
