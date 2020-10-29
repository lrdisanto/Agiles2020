"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllersProf_1 = require("../controllersProf/indexControllersProf");
class IndexRoutesProf {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControllersProf_1.indexControllerProf.index);
    }
}
const indexRoutesProf = new IndexRoutesProf();
exports.default = indexRoutesProf.router;
