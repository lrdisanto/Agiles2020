import {Router} from 'express';
import novedadesController from '../controllers/novedadesController';

class NovedadesRoutes {
public router : Router = Router();

constructor(){
this.config();

}
  config(): void {
    this.router.get('/',novedadesController.list);
    this.router.post('/',novedadesController.create);
    this.router.delete('/:id',novedadesController.delete);
    this.router.put('/:id',novedadesController.update);
    this.router.get('/:id',novedadesController.getOne);
 

    }
}

const novedadesRoutes = new NovedadesRoutes();
export default novedadesRoutes.router;