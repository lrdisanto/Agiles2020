import express, {Application} from 'express';
import indexRoutes from "./routes/indexRoutes";
import contenidoRoutes from "./routes/contenidoRoutes"
import altaAlumnoRoutes from "./routes/altaAlumnoRoutes";
import indexRoutesProf from "./routesProf/indexRoutesProf";

import materiaRoutes from "./routes/materiaRoutes";
import profRoutes from "./routesProf/profRoutes";
import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.routesProf();
    }

config(): void {
    this.app.set('port',process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    
    this.app.use(express.urlencoded({extended: false}));
}
routes(): void {
    this.app.use('/',indexRoutes);
    this.app.use('/api/contenidos', contenidoRoutes);
    this.app.use('/api/alumno', altaAlumnoRoutes);
    this.app.use('/api/materia', materiaRoutes)
}
routesProf(): void {
    this.app.use('/',indexRoutesProf);
    this.app.use('/api/profesor', profRoutes);
}
start(): void {
    this.app.listen(this.app.get('port'), () =>{
    console.log('Server on port', this.app.get('port'));
});

}
}

const server = new Server();
server.start();