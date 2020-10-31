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
class ContenidosController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const contenido = yield database_1.default.query('SELECT * FROM contenidos WHERE idcontenido= ?', [id]);
            console.log(id);
            res.json({ text: 'Contenido encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO contenidos set ?', [req.body]);
            res.json({ message: 'Contenido guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE contenidos set ? WHERE idcontenido = ?', [req.body, id]);
            res.json({ message: 'El contenido fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM contenidos WHERE idcontenido = ?', [id]);
        });
    }
    lau(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM contenidos as c INNER JOIN materia as m on c.codigomateria=m.idmateria INNER JOIN profesor as p on p.idprofesor=m.idprofesor where p.idprofesor=1', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    alumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM contenidos as c INNER JOIN materia as m on c.codigomateria=m.idmateria INNER JOIN profesor as p on p.idprofesor=m.idprofesor where p.idprofesor=1', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const contenidosController = new ContenidosController();
exports.default = contenidosController;
