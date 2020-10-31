import { Request, Response } from 'express';
import pool from '../database';

class PruebaController {
    public async list2 (req: Request,res: Response) {
        await pool.query('SELECT * FROM anio', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const pruebaController = new PruebaController();
export default pruebaController;