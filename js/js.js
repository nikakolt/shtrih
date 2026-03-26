document.addEventListener("DOMContentLoaded", function () {

  const pop1 = document.querySelector('.pop1');
  const jidsk = document.querySelector('.jidsk');
  const ruk1 = document.querySelector('.ruk1');
  const ok1 = document.querySelector('.ok1');
  const close1 = document.querySelector('.close1');
  const close2 = document.querySelector('.close2');

 
  if (!pop1 || !jidsk || !ruk1 || !ok1 || !close1 || !close2) {
    console.error('Не все элементы найдены на странице');
    return;
  }


  function openPop1() {
    pop1.style.display = 'flex';
  }

  function closePop1() {
    pop1.style.display = 'none';
  }


  function openJidsk() {
    jidsk.style.display = 'flex';
  }


  function closeJidsk() {
    jidsk.style.display = 'none';
  }

 
  function handleOkClick() {
    closePop1();      
    openJidsk();     
  }

 
  ruk1.addEventListener('click', openPop1);
  ok1.addEventListener('click', handleOkClick);
  close1.addEventListener('click', closePop1);
  close2.addEventListener('click', closeJidsk);

 
  window.addEventListener('click', (event) => {
    if (event.target === pop1) {
      closePop1();
    }
    if (event.target === jidsk) {
      closeJidsk();
    }
  });












const pop11 = document.querySelector('.pop11');
  const jidsk11 = document.querySelector('.jidsk11');
  const ruk2 = document.querySelector('.ruk2');
  const ok11 = document.querySelector('.ok11');
  const close11 = document.querySelector('.close11');
  const close21 = document.querySelector('.close21');

 
  if (!pop11 || !jidsk11 || !ruk2 || !ok11 || !close11 || !close21) {
    console.error('Не все элементы найдены на странице');
    return;
  }

  
  function openPop11() {
    pop11.style.display = 'flex';
  }

  
  function closePop11() {
    pop11.style.display = 'none';
  }

 
  function openJidsk11() {
    jidsk11.style.display = 'flex';
  }

 
  function closeJidsk11() {
    jidsk11.style.display = 'none';
  }

  
  function handleOk11Click() {
    closePop11();     
    openJidsk11();      
  }

 
  ruk2.addEventListener('click', openPop11);
  ok11.addEventListener('click', handleOk11Click);
  close11.addEventListener('click', closePop11);
  close21.addEventListener('click', closeJidsk11);

  
  window.addEventListener('click', (event) => {
    if (event.target === pop11) {
      closePop11();
    }
    if (event.target === jidsk11) {
      closeJidsk11();
    }
  });











const pop111 = document.querySelector('.pop111');
  const jidsk111 = document.querySelector('.jidsk111');
  const ruk3 = document.querySelector('.ruk3');
  const ok111 = document.querySelector('.ok111');
  const close111 = document.querySelector('.close111');
  const close211 = document.querySelector('.close211');

 
  if (!pop111 || !jidsk111 || !ruk3 || !ok111 || !close111 || !close211) {
    console.error('Не все элементы найдены на странице');
    return;
  }


  function openPop111() {
    pop111.style.display = 'flex';
  }


  function closePop111() {
    pop111.style.display = 'none';
  }

  
  function openJidsk111() {
    jidsk111.style.display = 'flex';
  }

 
  function closeJidsk111() {
    jidsk111.style.display = 'none';
  }


  function handleOk111Click() {
    closePop111();      
    openJidsk111();     
  }


  ruk3.addEventListener('click', openPop111);
  ok111.addEventListener('click', handleOk111Click);
  close111.addEventListener('click', closePop111);
  close211.addEventListener('click', closeJidsk111);


  window.addEventListener('click', (event) => {
    if (event.target === pop111) {
      closePop111();
    }
    if (event.target === jidsk111) {
      closeJidsk111();
    }
  });







const pop1111 = document.querySelector('.pop1111');
const ruk4 = document.querySelector('.ruk4');
const ok1111 = document.querySelector('.ok1111');
const close1111 = document.querySelector('.close1111');

if (!pop1111 || !ruk4 || !ok1111 || !close1111) {
  console.error('Не все элементы найдены на странице');
} else {
  function openPop1111() {
    pop1111.style.display = 'flex';
  }

  function closePop1111() {
    pop1111.style.display = 'none';
  }

  function handleOk1111Click() {
    closePop1111();
    window.open('https://www.calameo.com/read/008186710b71a25042b37', '_blank');
  }

  ruk4.addEventListener('click', openPop1111);
  ok1111.addEventListener('click', handleOk1111Click);
  close1111.addEventListener('click', closePop1111);

  window.addEventListener('click', (event) => {
    if (event.target === pop1111) {
      closePop1111();
    }
  });
}










const colorImages = document.querySelectorAll('.col img');
const targetRam = document.querySelector('.ram');
let selectedColor = null; 

colorImages.forEach(function(img) {
  img.addEventListener('click', function() {
    targetRam.src = this.src;
    selectedColor = this.className; 
    console.log('Цвет выбран и отображен в .ram:', this.src, 'Класс:', selectedColor);
  });
});


const imageMap = {
  'col1_bukm': './img/mifyellow.png',
  'col1_buksh': './img/shifyellow.png',
  'col2_bukm': './img/mifred.png',
  'col2_buksh': './img/shifred.png',
  'col3_bukm': './img/mifgreen.png',
  'col3_buksh': './img/shifgreen.png',
  'col4_bukm': './img/mifblue.png',
  'col4_buksh': './img/shifblue.png'
};


const images = [
  { src: './img/bukm.png', class: 'bukm' },
  { src: './img/buksh.png', class: 'buksh' }
];

let currentIndex = 0;
const imagesContainer = document.getElementById('images-container');
const targetRam3 = document.querySelector('.ram3'); 
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateCarousel() {
  imagesContainer.innerHTML = '';
  const imgElem = document.createElement('img');
  imgElem.src = images[currentIndex].src;
  imgElem.classList.add(images[currentIndex].class);
  imgElem.style.cursor = 'pointer';
  imgElem.style.width = '12vw';
  imgElem.style.height = 'auto';
  
  imgElem.addEventListener('click', () => {
    if (selectedColor) {
      const key = `${selectedColor}_${images[currentIndex].class}`; 
      const newSrc = imageMap[key];
      if (newSrc) {
        targetRam3.src = newSrc;
        console.log('Буква выбрана, отображается в .ram3:', newSrc);
      } else {
        console.log('Комбинация не найдена:', key);
      }
    } else {
      console.log('Сначала выберите цвет');
    }
  });
  
  imagesContainer.appendChild(imgElem);
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();

















const slider = document.querySelector('.slider');
const str11 = document.querySelector('.str11');
const str22 = document.querySelector('.str22');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;


str11.addEventListener('click', showPreviousSlide);
str22.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();










const cubiki = document.querySelector('.cubiki');
let draggables = document.querySelectorAll('.cubiki img');


draggables.forEach(img => img.classList.add('draggable'));


draggables = document.querySelectorAll('.draggable');

let isDragging = false;
let currentElement = null;
let startX, startY;
let startLeft, startTop;

draggables.forEach(draggable => {
  draggable.addEventListener('mousedown', startDrag);
  draggable.addEventListener('dragstart', (e) => e.preventDefault());
});

function startDrag(e) {
  e.preventDefault(); 
  isDragging = true;
  currentElement = e.target.closest('.draggable');


  currentElement.style.transform = 'translateY(0)';
  currentElement.style.transition = 'none'; 

  startX = e.clientX;
  startY = e.clientY;
  startLeft = currentElement.offsetLeft;
  startTop = currentElement.offsetTop;

  currentElement.style.cursor = 'grabbing';
  currentElement.style.opacity = '0.9';
  currentElement.style.zIndex = '1000';

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
}

function onDrag(e) {
  if (!isDragging || !currentElement) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  let newLeft = startLeft + dx;
  let newTop = startTop + dy;


  currentElement.style.left = newLeft + 'px';
  currentElement.style.top = newTop + 'px';
}

function stopDrag() {
  if (!isDragging || !currentElement) return;

  isDragging = false;
  currentElement.style.cursor = 'grab';
  currentElement.style.opacity = '1';
  currentElement.style.zIndex = '';
  currentElement.style.transition = ''; 

  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
  currentElement = null;
}









const btn = document.getElementById('but');
const img = document.getElementById('pro');
const bt = document.getElementById('butt');
const im = document.getElementById('vish');

btn.addEventListener('click', () => {
    if (img) img.src = 'img/pro2.svg';
});

bt.addEventListener('click', () => {
    if (im) im.src = 'img/vish2.svg'; 
});







const canvas = document.getElementById('paint');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    
   
    canvas.width = 732;  
    canvas.height = 702; 
    canvas.style.width = '732px';  
    canvas.style.height = '702px'; 
    
   
    ctx.lineWidth = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#F3E1A3';
    
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });
    
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
    
}











let activeStamp = null; 


function selectStamp(src) {
    activeStamp = src;
    
}


document.querySelector('.bukva2').addEventListener('click', () => selectStamp('./img/bukva2.png'));
document.querySelector('.bukva3').addEventListener('click', () => selectStamp('./img/bukva3.png'));
document.querySelector('.bukva4').addEventListener('click', () => selectStamp('./img/bukva4.png'));


const whiteContainer = document.querySelector('.white-container');
whiteContainer.addEventListener('click', (event) => {
    if (!activeStamp) return; 

    const stampImg = document.createElement('img');
    stampImg.src = activeStamp;
    stampImg.classList.add('stamp'); 

    
    const rect = whiteContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    stampImg.style.position = 'absolute';
    stampImg.style.left = `${x}px`;
    stampImg.style.top = `${y}px`;
    stampImg.style.width = '5vw'; 
   

   
    whiteContainer.appendChild(stampImg);
});




document.querySelectorAll('.bukva2, .bukva3, .bukva4').forEach(bukva => {
    bukva.addEventListener('mousedown', () => {
        bukva.style.cursor = 'grabbing'; 
    });
    bukva.addEventListener('mouseup', () => {
        bukva.style.cursor = 'pointer'; 
    });
});











});