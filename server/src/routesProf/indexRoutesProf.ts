import {Router} from 'express';
import { indexControllerProf } from '../controllersProf/indexControllersProf';


 class IndexRoutesProf {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexControllerProf.index);
    }
}

const indexRoutesProf = new IndexRoutesProf();
export default indexRoutesProf.router;