'use strict';

import mongoose from 'mongoose';
import colors from 'colors';
import environment from './environment';

mongoose.Promise = require('bluebird');

mongoose.connect(environment.mongo.uri, environment.mongo.options);

mongoose.connection.on('connected', () => {
  console.log(`[${'MongoDB'.cyan}]: connected ${environment.mongo.db.cyan}`);
  if (!environment.seedDB && process.env.NODE_ENV === 'production') {
    console.log('-'.repeat(39).grey);
  }
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose error:${err}`);
  process.exit(-1);
});

if (environment.seedDB) {
  require('./seed');
}
