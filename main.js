
//elemento container DOM
const cardsContainer = document.getElementById('cardsContainer');
console.log(cardsContainer)

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
            let imgSrc = e.target.src;
            console.log('hai cliccato la immagine', imgSrc)
        });

    });
}