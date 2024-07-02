import { fetchData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';
import { fetchData, createNameCapsulesHTML, createCapsulesHTML} from'./modulos/capsules.js;
let contador = 0;
let rockets = [];

async function fetchRocket() {
    const rocket = rockets[contador];
    if (rocket) {
        const nameRocketHTML = createNameRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML = nameRocketHTML;

        const rocketHTML = createRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML += rocketHTML;

        displayImages(rocket.flickr_images);
    }
}

function cambiarContador(valor) {
    contador = valor;
    fetchRocket(); 
}

document.getElementById('button1').addEventListener('click', function() {
    cambiarContador(0);
});

document.getElementById('button2').addEventListener('click', function() {
    cambiarContador(1);
});

document.getElementById('button3').addEventListener('click', function() {
    cambiarContador(2);
});

document.getElementById('button4').addEventListener('click', function() {
    cambiarContador(3);
});

function displayImages(images) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('imagen1');
        imgElement.referrerPolicy = 'no-referrer';
        imageContainer.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        rockets = await fetchData();
        fetchRocket(); // Inicializar con el primer cohete
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});


const buttonContainer = document.getElementById('buttonContainer');
const rocketButtons = document.querySelectorAll('.boton__cohetes');
const showMoreButton = document.getElementById('showMoreButton');

// Contador para manejar el estado de visibilidad de los botones


// Función para cambiar la visibilidad de los botones de cohetes
function cambiarBotones() {
  // Iterar sobre los botones de cohetes
  rocketButtons.forEach((button, index) => {
    if (contador === 0) {
      // Mostrar los primeros dos botones
      if (index < 2) {
        button.style.display = 'inline-block';
      } else {
        button.style.display = 'none';
      }
    } else {
      // Mostrar los siguientes dos botones
      if (index >= 2 && index < 4) {
        button.style.display = 'inline-block';
      } else {
        button.style.display = 'none';
      }
    }
  });

  contador = (contador + 1) % 2; // Alternar entre 0 y 1
}

// Agregar evento de clic al botón de la flecha
showMoreButton.addEventListener('click', cambiarBotones);

async function fetchCapsule() {
  const capsule = capsule[contador];
  if (capsule) {
      const namecapsuleHTML = createNameCapsuleHTML([capsule]);
      document.querySelector('.Rockets').innerHTML = nameRocketHTML;

      const rocketHTML = createRocketHTML([capsule]);
      document.querySelector('.Rockets').innerHTML += rocketHTML;

      displayImages(capsule.flickr_images);
  }
}

function cambiarContador(valor) {
  contador = valor;
  fetchRocket(); 
}



