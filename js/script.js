/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare 
dinamicamente il carosello.
Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile 
e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e 
l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e 
viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
*/



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//al caricamento della pagina la prima immagine/thumbnail è activeItem
let activeItem = 0; // SOURCE OF TRUTH (controlla l'indice di tutte le immagini/thumbnail)

//per ogni immagine/thumbnail creo un template e lo inserisco nel dom
const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
images.forEach((singleImage) => {
    const newImage = `
        <div class="single-image">
            <img src="${singleImage.image}">
            <div class="single-image-text">
                <h2>${singleImage.title}</h2>
                <p>${singleImage.text}</p>
            </div>
        </div>
    `
    imagesContainer.innerHTML += newImage;

    const newThumbnail = `
        <div class="single-thumbnail">
        <img src="${singleImage.image}"
        </div>
    `
    thumbnailsContainer.innerHTML += newThumbnail;
});

//assegno la classe active all'imagine/thumbnail con indice 0 (all'apertura della pagina)
const allImages = document.querySelectorAll('.single-image');
const allThumbnails = document.querySelectorAll('.single-thumbnail')
allImages[activeItem].classList.add('active');
allThumbnails[activeItem].classList.add('active');

//al click dell'utente sulla freccia next, l'immagine/thumbnail successiva diventa active
const nextBtn = document.querySelector('.arrow.next')
nextBtn.addEventListener('click', function(){
    //al click rimuovo la classe active dall'elemento corrente
    document.querySelector('.single-image.active').classList.remove('active');
    document.querySelector('.single-thumbnail.active').classList.remove('active');
    //al click incremento l'indice solo se non ha già raggiunto l'ultimo elemento 
    //dell'array allImages, altrimenti resetto l'indice al primo elemento
    if (activeItem < allImages.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }
    //al click assegno la classe active all'elemento successivo
    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});

//al click dell'utente sulla freccia previous, l'immagine/thumbnail precedente diventa active
const prevBtn = document.querySelector('.arrow.previous')
prevBtn.addEventListener('click', function(){
    //al click rimuovo la classe active dall'elemento corrente
    document.querySelector('.single-image.active').classList.remove('active');
    document.querySelector('.single-thumbnail.active').classList.remove('active');
    //al click decremento l'indice solo se non ha già raggiunto il primo elemento 
    //dell'array allImages, altrimenti porto l'indice all'ultimo elemento
    if (activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImages.length - 1;
    }
    //al click assegno la classe active all'elemento precedente
    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});
 