"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.createNestServer = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const functions = require("firebase-functions");
const platform_express_1 = require("@nestjs/platform-express");
const server = express();
const createNestServer = async (expressInstance) => {
    const adapter = new platform_express_1.ExpressAdapter(expressInstance);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter, {});
    app.enableCors();
    return app.init();
};
exports.createNestServer = createNestServer;
exports.createNestServer(server)
    .then(v => console.log('Nest Ready'))
    .catch(err => console.error('Nest broken', err));
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=main.js.map