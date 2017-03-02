'use strict';

import path from 'path';

export default {

  port: 9000,

  seedDB: false,

  root: path.normalize(`${__dirname}/../..`),

  ip: process.env.IP || '0.0.0.0', // Server IP

  mongo: {
    uri: 'mongodb://localhost/angular-example',
    options: {
      db: {
        safe: true
      }
    }
  },

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'angular-example-secret'
  },
};