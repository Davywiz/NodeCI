jest.setTimeout(30000);
require('../model/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');


mongoose.connect(keys.mongoURI, {
    useMongoClient: true
});