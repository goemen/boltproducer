const express = require('express');
const faker = require('faker');

const app = express();

app.get('/api/data', (req, res) => {
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push({
      eventId: faker.random.uuid(),
      eventType: 'Lightning',
      lastModifiedDateTime: faker.date.past(),
      eventDateTime: faker.date.past(),
      eventNanoSec: faker.random.number(),
      algorithmId: faker.random.uuid(),
      location: { lat: faker.address.latitude(), lon: faker.address.longitude(), alt: faker.random.number() },
      locationErrorEllipse: { semiMajorAxis: faker.random.number(), semiMinorAxis: faker.random.number(), azimuth: faker.random.number() },

    });

  }
  res.json({
    sucess: true,
    msg: "Events found",
    events: items
  });
});

app.listen(3000, () => {
  console.log("Lightning data producer api running.....");
});