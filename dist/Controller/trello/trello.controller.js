"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_service_1 = require("../../Services/auth/verifyToken.service");
const trello_service_1 = require("../../Services/trello/trello.service");
const trelloRouter = (0, express_1.Router)();
trelloRouter.post('', verifyToken_service_1.verifyToken, trello_service_1.createCardService)
    .get('/:listID', verifyToken_service_1.verifyToken, trello_service_1.getCardsInListService);
exports.default = trelloRouter;
