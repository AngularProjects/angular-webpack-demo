import express from 'express';
import http from 'http';
import colors from 'colors';
import environment from './configs/environment';

const app = express();
const server = http.createServer(app);

const startServer = () => {
  app.angularExample = server.listen(environment.port, environment.ip, () => {
    console.log('-'.repeat(39).grey);
    const address = `http://localhost:${environment.port}`;
    console.log(`[${'Express'.blue}]: server: ${address.cyan}`);
  });
};

setImmediate(startServer);

require('./configs/mongoose');
require('./configs/express').default(app);
require('./configs/routes').default(app);

export default app;
