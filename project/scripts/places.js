const places = document.querySelector('#places');
const file = './data/places.json'

async function getplacesData() {
    const response = await fetch(file);
    const data = await response.json();
    displayCompanies(data.places);
}
getCompData();

const displayCompanies = (places) => {
    companies.forEach((place) => {
        let card = document.createElement('div');
        let plName = document.createElement('h2');
        let picture = document.createElement('img');
        let state = document.createElement('p');
        let attraction = document.createElement('p');

        plName.textContent = `${place.name}`;
        state.innerHTML = `In the department of: ${place.department}`;
        attraction.innerHTML = `Popular attraction: ${company.attraction}`;

        picture.setAttribute('src', place.picture);
        picture.setAttribute('alt', `${place.name} image`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '250');

        card.appendChild(plName);
        card.appendChild(picture);
        card.appendChild(state);
        card.appendChild(attraction);

        places.appendChild(card);
    })
}