import {Router} from 'express';
import pruebaController from '../controllers/pruebaController';

 class PruebaRoutes {
    public router: Router = Router();

    constructor() {

        this.config();
    }

    config(): void {
        this.router.get('/', pruebaController.list2);
        


    }
    
}


const  pruebasRoutes = new PruebaRoutes();
export default pruebasRoutes.router;