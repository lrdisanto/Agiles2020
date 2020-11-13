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
class MateriaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM materia', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idanio = req.params.idanio.toString();
            yield database_1.default.query('SELECT * FROM materia WHERE idanio=?', [idanio], function (err, data) {
                res.json({ materias: data });
            });
        });
    }
    getMateriasProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idprofesor = req.params.idprofesor.toString();
            yield database_1.default.query('SELECT * FROM materia WHERE idprofesor=?', [idprofesor], function (err, data) {
                res.json({ materias: data });
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const materia = yield database_1.default.query('SELECT * FROM materia WHERE idmateria= ?', [id]);
            console.log(id);
            res.json({ text: 'Materia encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO materia set ?', [req.body]);
            res.json({ message: 'Materia guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE materia set ? WHERE idmateria = ?', [req.body, id]);
            res.json({ message: 'La materia fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM materia WHERE idmateria = ?', [id]);
        });
    }
}
const materiaController = new MateriaController();
exports.default = materiaController;
