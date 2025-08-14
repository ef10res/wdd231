const file = './data/places.json';

// Async function to fetch data
async function getPlacesData() {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();
        return data.places; // Return the places array
    } catch (error) {
        console.error("Error:", error); 
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

createSelect(places);
       