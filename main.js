
//elemento container DOM
const cardsContainer = document.getElementById('cardsContainer');
console.log(cardsContainer)

//elemento card DOM
let card = `
        <div class="card">
            <img src="https://i.scdn.co/image/ab67616d0000b273146487c9b1fa54ac381eb579" alt="descrizione img">
            <div class="caption">
                some text
            </div>
        </div>`

//chiamiamo axios 
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6') //chiamata HTTP => API

    .catch(error => { //controlliamo errori
        console.log('error')
    })

    .then(res => {
        console.log(res.data) //debug
        mail = res.data //stampiamo le  mails
        // createLi(mail, '', 'list') // invochiamo la funzione, passiamo le mail e il UL = 'list'
    })
