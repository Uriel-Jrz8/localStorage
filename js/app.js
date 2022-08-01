//Variables 
const formulario = document.querySelector('#formulario');
let tweets = [];

evensstListenner();

function evensstListenner() {
    formulario.addEventListener('submit', addComent);
}



function addComent(event) {
    event.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if (tweet !== '') {
        tweets.push(tweet);
        //tweets = [...tweets,tweet]
        console.log(tweets);
        formulario.reset();
        //localStorage.setItem('array',tweets);

    } else {
        mensajeError('Por favor ingresa un tweet');
        const error2 = document.querySelector('p.error');
        setTimeout(() => {
            error2.remove();
        }, 2000)
    }
}

function mensajeError(mensaje) {
    const menError = document.createElement('p');
    menError.textContent = mensaje;
    menError.classList.add('error');
    const error = document.querySelectorAll('.error');

    if (error.length === 0) {
        formulario.appendChild(menError);
    }
}

