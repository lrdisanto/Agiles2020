import { Request, Response } from 'express';

class IndexControllerProf {
   public index (req: Request,res: Response) {
        res.json({text: 'API is /api/profesor'});

    }
}


export const indexControllerProf = new IndexControllerProf();