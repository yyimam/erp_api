import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import {ExpressAdapter, NestExpressApplication} from '@nestjs/platform-express';

const server: express.Express = express();
// export const createNestServer = async (expressInstance: express.Express) => {
//   const adapter = new ExpressAdapter(expressInstance);
//   const app = await NestFactory.create<NestExpressApplication>(
//     AppModule, adapter, {},
//   );
//   app.enableCors();
//   app.listen(3000);
//   app.setGlobalPrefix('api');
//   return app.init();
// };

export const createNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, adapter, {},
  );
  app.enableCors();
  return app.init();
};

createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));
export const api: functions.HttpsFunction = functions.https.onRequest(server);