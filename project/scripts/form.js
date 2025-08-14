const file = './data/places.json';

async function getPlacesData() {
    try {
        const response = await fetch(file);
        if (!response.ok) { 
            throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.places;
    } catch (error) {
        console.error("Error fetching places data:", error); 
        return []; 
    }
}

const createSelect = places => {
    const selectElement = document.querySelector("#placeoi");
    if (!selectElement) {
        console.error("Select element with ID 'placeoi' not found.");
        return;
    }
    places.forEach(place => {
        let item = document.createElement("option");
        item.innerHTML = `${place.name} Department: ${place.department}`;
        selectElement.appendChild(item);
    });
};

getPlacesData()
    .then(places => {
        if (places && places.length > 0) { 
            createSelect(places);
        } else {
            console.warn("No places data to display.");
        }
    })
    .catch(error => {
        console.error("Error processing places data:", error); 
    });