"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const contenidoRoutes_1 = __importDefault(require("./routes/contenidoRoutes"));
const altaAlumnoRoutes_1 = __importDefault(require("./routes/altaAlumnoRoutes"));
const indexRoutesProf_1 = __importDefault(require("./routesProf/indexRoutesProf"));
const materiaRoutes_1 = __importDefault(require("./routes/materiaRoutes"));
const profRoutes_1 = __importDefault(require("./routesProf/profRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.routesProf();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/contenidos', contenidoRoutes_1.default);
        this.app.use('/api/contenidos/alumno', contenidoRoutes_1.default);
        this.app.use('/api/alumno', altaAlumnoRoutes_1.default);
        this.app.use('/api/materia', materiaRoutes_1.default);
    }
    routesProf() {
        this.app.use('/', indexRoutesProf_1.default);
        this.app.use('/api/profesor', profRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
