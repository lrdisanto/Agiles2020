import {Router} from 'express';
import materiaController from '../controllers/materiaController';

class MateriaRoutes {
public router : Router = Router();

constructor(){
this.config();

}
  config(): void {
    this.router.get('/',materiaController.list);
    this.router.post('/',materiaController.create);
    this.router.delete('/:id',materiaController.delete);
    this.router.put('/:id',materiaController.update);
    this.router.get('/:id',materiaController.getOne);



    }
}

const materiaRoutes = new MateriaRoutes();
export default materiaRoutes.router;