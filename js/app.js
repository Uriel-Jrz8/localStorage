//Variables 
const formulario = document.querySelector('#formulario');
const listaTweet = document.querySelector('#lista-tweets');
let tweets = [];
mostrarTweets();
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
        //console.log(tweets);
        formulario.reset();
        localStorage.setItem('array',tweets);
        
    } else {
        mensajeError('Por favor ingresa un tweet');
        const error2 = document.querySelector('p.error');
        setTimeout(() => {
            error2.remove();
        }, 2000)
    }
    mostrarTweets();
}

function mostrarTweets(){
    limpiarHtml();
    let local = localStorage.getItem('array');
    let newArray = local.split(',');
    //console.log(prueba);
    newArray.forEach(tweet => {
        const menTweet = document.createElement('p');
        menTweet.textContent = tweet;
        listaTweet.appendChild(menTweet);
        //console.log(tweet);
        
    });
}

function limpiarHtml(){
    //contenedor.innerHTML = '';
   /*  limpiando de una mejor manera el HTML */
    while(listaTweet.firstChild){
        listaTweet.removeChild(listaTweet.firstChild);
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

