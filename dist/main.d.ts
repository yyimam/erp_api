/// <reference types="express-serve-static-core" />
import * as express from 'express';
import * as functions from 'firebase-functions';
import { NestExpressApplication } from '@nestjs/platform-express';
export declare const createNestServer: (expressInstance: express.Express) => Promise<NestExpressApplication>;
export declare const api: functions.HttpsFunction;
