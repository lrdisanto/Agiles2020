"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profController_1 = __importDefault(require("../controllersProf/profController"));
class ProfRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', profController_1.default.list);
        this.router.post('/', profController_1.default.create);
        this.router.delete('/:id', profController_1.default.delete);
        this.router.put('/:id', profController_1.default.update);
        this.router.get('/:id', profController_1.default.getOne);
    }
}
const profRoutes = new ProfRoutes();
exports.default = profRoutes.router;
