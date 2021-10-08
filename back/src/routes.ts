const controllers = require('./api/controllers/HomeController');
const express = require('express');

const route = express.Router();

route.get('/', controllers.getAllParticipants);

route.post('/', controllers.addParticipant);

route.put('/:id', controllers.editParticipant);

route.delete('/', controllers.deleteParticipant);

route.get('/sort', controllers.sortParticipants);

route.delete('/all', controllers.newSecretFriend);

module.exports = route