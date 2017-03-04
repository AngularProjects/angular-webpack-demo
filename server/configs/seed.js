'use strict';

import User from '../api/user/user.model';
import colors from 'colors';

User.find({}).remove()
  .then(() => {
    User.create({
      username: 'Kenny',
      email: 'cnkuan@qq.com',
      password: 'kenny'
    }, {
      username: 'Jane',
      email: '553846412@qq.com',
      password: 'jane'
    })
    .then(() => {
      console.log(`[${'Seed'.yellow}]: finish populating users data`);
      if (process.env.NODE_ENV === 'production') {
        console.log('-'.repeat(39).grey);
      }
    });
  });
