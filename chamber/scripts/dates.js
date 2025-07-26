const lastModifiedDate = new Date(document.lastModified);
const year = lastModifiedDate.getFullYear();
const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(lastModifiedDate.getDate()).padStart(2, '0');

const formattedDate = `Last Modified: ${month}/${day}/${year}`;

document.getElementById('currentyear').textContent = `©️${year} Davis Chamber of Commerce`;

document.getElementById('lastModified').textContent = formattedDate;