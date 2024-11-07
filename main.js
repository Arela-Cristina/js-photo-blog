
//elemento container DOM
const cardsContainer = document.getElementById('cardsContainer');
console.log(cardsContainer)

//elemento DOM overlay 
const overlay = document.getElementById('overlay');

//elemento button DOM
const closeButton = document.getElementById('closeButton')

//chiamiamo axios 
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6') //chiamata HTTP => API

    .catch(error => { //controlliamo errori
        console.log('error')
    })

    .then(res => {
        console.log(res.data) //debug
        data = res.data;
        //invocchiamo la funzione pasandoli come parametro la nostra data
        appendToTemplate(data)

    })


//creiammo una funzione per appendere le immagini nel teplate literal
function appendToTemplate(data) { //parametro data
    data.forEach(({ url, title, id }) => {  // destrutturazione forEach prende tutti i 6 oggetti della data, scegliamo noi quali di tutti ci interessano. url e title
        //aggiungiamo template literal
        const card = ` 
            <div class="card">
                <img src="${url}" alt="${title}" id="${id}" class="thumb">
                <div class="caption">
                    ${title}
                </div>
            </div>`;

        // appendiamo card al container
        cardsContainer.innerHTML += card;
    });

    //prendiamo ancora tutti i 6 elementi
    const thumbs = document.querySelectorAll(".thumb");
    console.log('HTML collection', thumbs);
    //per ogni thumb 
    thumbs.forEach(thumb => { //aggiungiamo un evento (e) => {} al click
        thumb.addEventListener('click', (e) => {
            let thumbSrc = e.target.src; // salviamo in una variabile il percorso della src target = la img corrente
            console.log('hai cliccato la immagine', thumbSrc);
            showThumbOnOverlay(thumbSrc) //invochiamo la funzione passandoli al parametro il elemento thumbSrc
        });

    });
}

//creiamo una funzione per mostrare la thumb nel overlay
function showThumbOnOverlay(thumbSrc) {
    const overlay = document.getElementById('overlay') //elemento DOM
    let imgOverlay = document.querySelector('.imgOverlay') //elemento DOM

    imgOverlay.src = thumbSrc; //img overlay sera igual a la thumb
    overlay.style.display = 'flex'; //overlay appare in display flex
}

//evento click chiudere overlay con il bottone close
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none'
});

//evento click chiudere overlay clicando il background etc.. 
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) { // target=overlay se e.target uguale a overlay
        overlay.style.display = 'none'; //add display none
    }
})