const lastModifiedDate = new Date(document.lastModified);
const year = lastModifiedDate.getFullYear();
const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(lastModifiedDate.getDate()).padStart(2, '0');

const formattedDate = `last modified ${month}/${day}/${year}`;

document.getElementById('currentyear').textContent = year;

document.getElementById('lastModified').textContent = formattedDate;
