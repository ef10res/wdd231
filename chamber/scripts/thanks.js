const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML =
    `<p>Thanks for filling out our form!
    <p>Application submitted for ${myInfo.get('name')} ${myInfo.get('lName')}</p>
    <p>Contact information:</p>
    <p>Your email: ${myInfo.get('eMail')}</p>
    <p>Your phone: ${myInfo.get('phone')}</p>
    <p>Business: ${myInfo.get('bisName')}</p>
    <p>at: ${myInfo.get('submissionTimestamp')}</p>`;