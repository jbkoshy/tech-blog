const { User } = require('../models');

const userData = [
    {
        username: 'Jonah',
        password: 'jonahrocks123'
    },
    {
        username: 'Sobi',
        password: 'sobirocks123'
    },
    {
        username: 'Meg',
        password: 'megrocks123'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true});

module.exports - seedUsers;