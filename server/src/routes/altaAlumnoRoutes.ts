import {Router} from 'express';
import altaAlumnoController from '../controllers/altaAlumnoController';

 class AltaALumnoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', altaAlumnoController.list);
        this.router.post('/', altaAlumnoController.create);
        this.router.delete('/:id', altaAlumnoController.delete );
        this.router.put('/:id', altaAlumnoController.update );
        this.router.get('/:id', altaAlumnoController.getOne);
        this.router.get('/getalumno/:email', altaAlumnoController.getID);

    }
}

const  altaAlumnoRoutes = new AltaALumnoRoutes();
export default altaAlumnoRoutes.router;