"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardsInList = exports.createCard = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const createCard = (card) => __awaiter(void 0, void 0, void 0, function* () {
    const { listID, mensaje } = card;
    const params = {
        idList: listID,
        key: config_1.KEY_TRELLO,
        token: config_1.TOKEN_TRELLO,
        name: mensaje
    };
    const response = yield axios_1.default.post(`https://api.trello.com/1/cards`, null, { params: params });
    return response.data;
});
exports.createCard = createCard;
const getCardsInList = (listID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.trello.com/1/lists/${listID}/cards`, {
        params: {
            key: config_1.KEY_TRELLO,
            token: config_1.TOKEN_TRELLO,
        }
    });
    return response.data;
});
exports.getCardsInList = getCardsInList;
