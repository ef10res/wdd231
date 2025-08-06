const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

button1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Benefits: 1 special event, basic training plan, basic advertising,
    10% discount on all events. Cost: Free.`
});

button2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Benefits: 1 special event, basic training plan, basic advertising,
        10 % discount on all events. Cost: $450 per month`
});

button3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Benefits: 1 special event, advanced training plan, avanced advertising,
        18 % discount on all events. Cost: $700 per month`
});

button4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Benefits: 2 special event, advanced training plan, top advertising,
        23 % discount on all events. Cost: $1100 per month`
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
