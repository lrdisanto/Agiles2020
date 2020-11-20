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
const database_1 = __importDefault(require("../database"));
class NovedadesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM novedades', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getNovedades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idanio = req.params.idanio.toString();
            yield database_1.default.query('SELECT * FROM novedades WHERE idnovedades=?', [idanio], function (err, data) {
                res.json({ novedades: data });
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const materia = yield database_1.default.query('SELECT * FROM novedades WHERE idnovedades= ?', [id]);
            console.log(id);
            res.json({ text: 'Materia encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO novedades set ?', [req.body]);
            res.json({ message: 'Novedad guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE novedades set ? WHERE idnovedades = ?', [req.body, id]);
            res.json({ message: 'La novedad fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM novedades WHERE idnovedades = ?', [id]);
        });
    }
}
const novedadesController = new NovedadesController();
exports.default = novedadesController;
