"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contenidosController_1 = __importDefault(require("../controllers/contenidosController"));
class ContenidosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contenidosController_1.default.lau);
        this.router.post('/', contenidosController_1.default.create);
        this.router.delete('/:id', contenidosController_1.default.delete);
        this.router.put('/:id', contenidosController_1.default.update);
        this.router.get('/:id', contenidosController_1.default.getOne);
        this.router.get('/alumno', contenidosController_1.default.alumno);
        this.router.post('/alumno', contenidosController_1.default.create);
    }
}
const contenidosRoutes = new ContenidosRoutes();
exports.default = contenidosRoutes.router;
