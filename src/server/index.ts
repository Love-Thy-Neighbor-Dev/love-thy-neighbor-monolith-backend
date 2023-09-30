import express from 'express';
import bodyParser from 'body-parser';

import { RootLevelRouter } from './routes';

const server = express();

// middlewares
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/', RootLevelRouter);

server.listen(process.env.PORT, async () => {
  console.log(`Server is running at ${process.env.PORT}.`);
});

export default server;
