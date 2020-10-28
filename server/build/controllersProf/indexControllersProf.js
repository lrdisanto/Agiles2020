"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllerProf = void 0;
class IndexControllerProf {
    index(req, res) {
        res.json({ text: 'API is /api/profesor' });
    }
}
exports.indexControllerProf = new IndexControllerProf();
