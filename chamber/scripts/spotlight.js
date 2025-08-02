const file = 'data/members.json';
const cards = document.querySelector('#spotlights');

async function getData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.members);
    const randomMembers = selectMembers(data.members);
    console.log(selectedMembers);
    displayMembers(randomMembers);
}

function selectMembers(memberList) {
    const goldMembers = memberList.filter(member => member.mLevel == 3);
    const silverMembers = memberList.filter(member => member.mLevel == 2);
    
    const selectedGold = [];
    const goldCopy = [...goldMembers];

    const randomGold1 = Math.random() * goldCopy.length;
    selectedGold.push(goldCopy[randomGold1]);

    const randomGold2 = Math.random() * goldCopy.length;
    selectedGold.push(goldCopy[randomGold2]);

    const randomSilver = Math.random() * silverMembers.length;
    const selectedSilver = silverMembers[randomSilver];

    return [...selectedGold, selectedSilver];
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('div');
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let logo = document.createElement('img');
        let website = document.createElement('a');

        name.textContent = member.name;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Image for: ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phoneNumber}`;
        website.setAttribute('href', '#');
        website.textContent = `${member.URL}`;

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    })
}

getData();