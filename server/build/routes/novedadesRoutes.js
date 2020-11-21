"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const novedadesController_1 = __importDefault(require("../controllers/novedadesController"));
class NovedadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', novedadesController_1.default.list);
        this.router.post('/', novedadesController_1.default.create);
        this.router.delete('/:id', novedadesController_1.default.delete);
        this.router.put('/:id', novedadesController_1.default.update);
        this.router.get('/:id', novedadesController_1.default.getOne);
    }
}
const novedadesRoutes = new NovedadesRoutes();
exports.default = novedadesRoutes.router;
