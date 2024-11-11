const lastModifiedDate = new Date(document.lastModified);

const options = {year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('dateupdated').textContent = `Last modified on: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;