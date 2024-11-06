
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
