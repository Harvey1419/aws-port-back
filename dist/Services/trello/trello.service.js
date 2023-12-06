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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardsInListService = exports.createCardService = void 0;
const trello_core_1 = require("../../core/trello/trello.core");
const createCardService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, trello_core_1.createCard)(req.body);
        res.json({ "Mensaje": "Card creada" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createCardService = createCardService;
const getCardsInListService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield (0, trello_core_1.getCardsInList)(req.params.listID);
        res.json(cards);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getCardsInListService = getCardsInListService;
