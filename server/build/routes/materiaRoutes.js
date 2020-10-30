"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiaController_1 = __importDefault(require("../controllers/materiaController"));
class MateriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', materiaController_1.default.list);
        this.router.post('/', materiaController_1.default.create);
        this.router.delete('/:id', materiaController_1.default.delete);
        this.router.put('/:id', materiaController_1.default.update);
        this.router.get('/:id', materiaController_1.default.getOne);
    }
}
const materiaRoutes = new MateriaRoutes();
exports.default = materiaRoutes.router;
