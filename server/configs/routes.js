'use strict';

import path from 'path';

export default (app) => {
  app.use('/api/users', require('../api/user'));

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
};