const url = "data/members.json"
const cards = document.querySelector('#cards');

async function getCompData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}
getCompData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('div');
        let compName = document.createElement('h2');
        let portrait = document.createElement('img');
        let phone = document.createElement('p');
        let site = document.createElement('p');

        compName.textContent = `${company.name}`;
        phone.innerHTML = `PHONE: ${company.phonenumber}`;
        site.innerHTML = `URL: ${company.URL}`;

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `${company.name} image`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        card.appendChild(compName);
        card.appendChild(portrait);
        card.appendChild(phone);
        card.appendChild(site);

        cards.appendChild(card);
    })
}