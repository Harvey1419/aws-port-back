"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_TRELLO = exports.KEY_TRELLO = exports.TOKEN_SECRET = exports.AWS_DYNAMO_USERS_TABLE = exports.AWS_DYNAMO_GENERAL_PROCESS_TABLE = exports.AWS_DYNAMO_CONTAINER_TABLE = exports.AWS_DYNAMO_SECRET_KEY = exports.AWS_DYNAMO_PUBLIC_KEY = exports.AWS_DYNAMO_REGION = exports.PORT = exports.AWS_PRIVATE_KEY = exports.AWS_PUBLIC_KEY = exports.AWS_S3_BUCKET_REGION = exports.AWS_S3_BUCKET_NAME = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
exports.AWS_S3_BUCKET_REGION = process.env.AWS_S3_BUCKET_REGION;
exports.AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
exports.AWS_PRIVATE_KEY = process.env.AWS_PRIVATE_KEY;
exports.PORT = process.env.PORT;
exports.AWS_DYNAMO_REGION = process.env.AWS_DYNAMO_REGION;
exports.AWS_DYNAMO_PUBLIC_KEY = process.env.AWS_DYNAMO_PUBLIC_KEY;
exports.AWS_DYNAMO_SECRET_KEY = process.env.AWS_DYNAMO_SECRET_KEY;
exports.AWS_DYNAMO_CONTAINER_TABLE = process.env.AWS_DYNAMO_CONTAINER_TABLE;
exports.AWS_DYNAMO_GENERAL_PROCESS_TABLE = process.env.AWS_DYNAMO_GENERAL_PROCESS_TABLE;
exports.AWS_DYNAMO_USERS_TABLE = process.env.AWS_DYNAMO_USERS_TABLE;
exports.TOKEN_SECRET = process.env.TOKEN_SECRET;
exports.KEY_TRELLO = process.env.KEY_TRELLO;
exports.TOKEN_TRELLO = process.env.TOKEN_TRELLO;