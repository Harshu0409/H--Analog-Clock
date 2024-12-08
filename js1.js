const destinations = [
    { name: 'Paris', description: 'The City of Light.', image: 'paris.jpg' },
    { name: 'Tokyo', description: 'The heart of Japan.', image: 'tokyo.jpg' },
    { name: 'New York', description: 'The Big Apple.', image: 'newyork.jpg' }
];

function displayDestinations() {
    const destinationList = document.querySelector('.destination-list');
    destinationList.innerHTML = '';
    destinations.forEach(destination => {
        const div = document.createElement('div');
        div.classList.add('destination-item');
        div.innerHTML = `
            <h3>${destination.name}</h3>
            <img src="${destination.image}" alt="${destination.name}">
            <p>${destination.description}</p>
        `;
        destinationList.appendChild(div);
    });
}

function searchDestinations() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredDestinations = destinations.filter(destination => 
        destination.name.toLowerCase().includes(query) ||
        destination.description.toLowerCase().includes(query)
    );
    displayFilteredDestinations(filteredDestinations);
}

function displayFilteredDestinations(filteredDestinations) {
    const destinationList = document.querySelector('.destination-list');
    destinationList.innerHTML = '';
    filteredDestinations.forEach(destination => {
        const div = document.createElement('div');
        div.classList.add('destination-item');
        div.innerHTML = `
            <h3>${destination.name}</h3>
            <img src="${destination.image}" alt="${destination.name}">
            <p>${destination.description}</p>
        `;
        destinationList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', displayDestinations);
