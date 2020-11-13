import {Router} from 'express';
import profController from '../controllersProf/profController';

 class ProfRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', profController.list);
        this.router.post('/', profController.create);
        this.router.delete('/:id', profController.delete );
        this.router.put('/:id', profController.update );
        this.router.get('/:id', profController.getOne);
        this.router.get('/getprofesor/:email', profController.getprofID);

        

    }
}

const  profRoutes = new ProfRoutes();
export default profRoutes.router;