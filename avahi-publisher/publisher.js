const express = require('express');
const os = require('os');

const app = express();

// Stupid service that returns an animal based on our advertised Avahi service
const ANIMALS = [
    'Elephant',
    'Ocelot',
    'Lesser Spotted Pygmy Shrew',
    'Zookeeper',
    'Rhinoceros',
    'Pigeon',
];

app.get('/', (_req, res) => {
    const index = Math.floor(Math.random() * ANIMALS.length);
    res.send(`A ${ANIMALS[index]} has been spotted!\n`);
});

app.listen(4567, () => {
    console.log('Listening for animal spotted on 4567');
});
