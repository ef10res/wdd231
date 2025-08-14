const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML = `
<p>Application submitted for ${myInfo.get('name')} ${myInfo.get('lName')}</p>
<p>Thanks for filling out our form you will get</p>
<p>information about ${myInfo.placeoi} via</p>
<p>the following mediums:</p>
<p>Your email: ${myInfo.get('eMail')}</p>
<p>Your phone: ${myInfo.get('phone')}</p>`
