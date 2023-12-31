"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const config_1 = require("./config/config");
const s3_controller_1 = __importDefault(require("./Controller/s3/s3.controller"));
const containers_dynamo_controller_1 = __importDefault(require("./Controller/containers/containers.dynamo.controller"));
const exportation_dynamo_controller_1 = __importDefault(require("./Controller/exportation/exportation.dynamo.controller"));
const cors_1 = __importDefault(require("cors"));
const user_controller_1 = __importDefault(require("./Controller/users/user.controller"));
const trello_controller_1 = __importDefault(require("./Controller/trello/trello.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
app.use((0, express_fileupload_1.default)());
app.use('/api/file', s3_controller_1.default);
app.use('/api/container', containers_dynamo_controller_1.default);
app.use('/api/exportation', exportation_dynamo_controller_1.default);
app.use('/api/usuarios', user_controller_1.default);
app.use('/api/trello', trello_controller_1.default);
app.listen(config_1.PORT, () => {
    console.log(`Escuchando en el puerto ${config_1.PORT}`);
});
