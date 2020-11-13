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
    this.router.get('/getmateria/:idanio', materiaController.getMaterias);
    this.router.get('/getmateriaprofesor/:idprofesor', materiaController.getMateriasProfesor);




    }
}

const materiaRoutes = new MateriaRoutes();
export default materiaRoutes.router;