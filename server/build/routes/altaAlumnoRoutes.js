"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const altaAlumnoController_1 = __importDefault(require("../controllers/altaAlumnoController"));
class AltaALumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', altaAlumnoController_1.default.list);
        this.router.post('/', altaAlumnoController_1.default.create);
        this.router.delete('/:id', altaAlumnoController_1.default.delete);
        this.router.put('/:id', altaAlumnoController_1.default.update);
        this.router.get('/:id', altaAlumnoController_1.default.getOne);
    }
}
const altaAlumnoRoutes = new AltaALumnoRoutes();
exports.default = altaAlumnoRoutes.router;
