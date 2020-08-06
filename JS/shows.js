// API - GET - POST
let apiUrl='https://project-1-api.herokuapp.com/';
// GET (SHOWS DATA)
let apiShowDate = 'showdates';
// API KEY
let apiKey = '?api_key=<5db77cc0-ab18-429a-b9e7-b46ecd10c2dc>';

const shows = () =>{
    axios.get(apiUrl + apiShowDate + apiKey)
    .then(response =>{
        console.log(response)
        response.data.forEach(array => {
            displayShows(array)
            console.log(array)
        });
    })
}
shows()

let ticket = document.querySelector('.tickets');
let title = document.createElement('h2');
title.classList.add('tickets__title');
let t = document.createTextNode('Shows');
title.appendChild(t);
ticket.appendChild(title);

let ticketDestination = document.createElement('div');
ticketDestination.classList.add('tickets__destination');
ticket.appendChild(ticketDestination);

let ticketShow= document.createElement('div');
ticketShow.classList.add('tickets__show');
ticketDestination.appendChild(ticketShow);

let ticketTitleDate = document.createElement('h3');
ticketTitleDate.classList.add('tickets__top');
let ttd = document.createTextNode('dates');
ticketTitleDate.appendChild(ttd);
ticketShow.appendChild(ticketTitleDate);

let ticketTitleVenue = document.createElement('h3');
ticketTitleVenue.classList.add('tickets__top');
let ttv = document.createTextNode('venue');
ticketTitleVenue.appendChild(ttv);
ticketShow.appendChild(ticketTitleVenue);

let ticketTitleLocation = document.createElement('h3');
ticketTitleLocation.classList.add('tickets__top');
let ttl = document.createTextNode('Location');
ticketTitleLocation.appendChild(ttl);
ticketShow.appendChild(ticketTitleLocation);

const displayShows = (array) =>{

    let ticketContainer = document.createElement('div');
    ticketContainer.classList.add('tickets__container');
    ticketDestination.appendChild(ticketContainer);

    let ticketBoxing = document.createElement('div');
    ticketBoxing.classList.add('tickets__boxing');
    ticketContainer.appendChild(ticketBoxing);

    ticketTitleDate = document.createElement('h3');
    ticketTitleDate.classList.add('tickets__info');
    ttd = document.createTextNode('date');
    ticketTitleDate.appendChild(ttd);
    ticketBoxing.appendChild(ticketTitleDate);

    let ticketDate = document.createElement('p');
    ticketDate.classList.add('tickets__date');
    let td = document.createTextNode(array.date);
    ticketDate.appendChild(td);
    ticketBoxing.appendChild(ticketDate);

    ticketBoxing= document.createElement('div');
    ticketBoxing.classList.add('tickets__boxing');
    ticketContainer.appendChild(ticketBoxing);

    ticketTitleVenue = document.createElement('h3');
    ticketTitleVenue.classList.add('tickets__info');
    ttv = document.createTextNode('venue');
    ticketTitleVenue.appendChild(ttv);
    ticketBoxing.appendChild(ticketTitleVenue);

    let ticketVenue= document.createElement('p');
    ticketVenue.classList.add('tickets__venue');
    let tv = document.createTextNode(array.place);
    ticketVenue.appendChild(tv);
    ticketBoxing.appendChild(ticketVenue);

    ticketBoxing= document.createElement('div');
    ticketBoxing.classList.add('tickets__boxing');
    ticketContainer.appendChild(ticketBoxing);

    ticketTitleLocation = document.createElement('h3');
    ticketTitleLocation.classList.add('tickets__info');
    ttl = document.createTextNode('Location');
    ticketTitleLocation.appendChild(ttl);
    ticketBoxing.appendChild(ticketTitleLocation);

    let ticketLocation= document.createElement('p');
    ticketLocation.classList.add('tickets__location');
    let tl = document.createTextNode(array.location);
    ticketLocation.appendChild(tl);
    ticketBoxing.appendChild(ticketLocation);

    let ticketButton = document.createElement('button');
    ticketButton.classList.add('tickets__button');
    let tb=document.createTextNode('Buy Tickets');
    ticketButton.appendChild(tb);
    ticketContainer.appendChild(ticketButton);
}