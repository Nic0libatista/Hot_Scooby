

const main = document.querySelector('main')
const backgrounds = ['url(midias/banner3.PNG)','url(midias/banner2.PNG)','url(midias/banner4.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
   
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)

//


const counters = document.querySelectorAll('.counter');

function startCounters() {
  counters.forEach(counter => {
    counter.innerText = 0; 

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 60;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounters();
    }
  });
}, {
  threshold: 0.6
});

observer.observe(document.querySelector('#beneficios'));

