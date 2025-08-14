const button = document.querySelector("#flag");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

button.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `The blue stripes represent the Pacific Ocean and the Caribbean Sea, 
    while the white band symbolizes the land between and the peace and prosperity of the Honduran people. 
    The five stars represent the five original member nations of the Federal Republic of Central America, 
    expressing a hope for future unity. `
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});