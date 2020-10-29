import {Router} from 'express';
import contenidosController from '../controllers/contenidosController';

 class ContenidosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', contenidosController.list);
        this.router.post('/', contenidosController.create);
        this.router.delete('/:id', contenidosController.delete );
        this.router.put('/:id', contenidosController.update );
        this.router.get('/:id', contenidosController.getOne);
    }
}

const  contenidosRoutes = new ContenidosRoutes();
export default contenidosRoutes.router;