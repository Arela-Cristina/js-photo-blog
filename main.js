
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
        myFunction(data)

    })


//creiammo una funzione per appendere le immagini nel teplate literal

function myFunction(data) { //parametro data
    data.forEach(({ url, title }) => {  // destrutturazione forEach prende tutti i 6 oggetti della data, scegliamo noi quali di tutti ci interessano. url e title
        //aggiungiamo template literal
        const card = ` 
            <div class="card">
                <img src="${url}" alt="${title}">
                <div class="caption">
                    ${title}
                </div>
            </div>`;

        // appendiamo card al container
        cardsContainer.innerHTML += card;
    });
}