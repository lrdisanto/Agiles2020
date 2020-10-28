import { Request, Response } from 'express';
import pool from '../database';

class ProfController {

            public async list ( req: Request,res: Response) {
            await pool.query('SELECT * FROM profesor', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }

        public async getOne( req: Request, res:Response): Promise<void>{
            const {id} = req.params;
            const prof = await pool.query('SELECT * FROM profesor WHERE idprofesor= ?',[id]);
            console.log(id);
            res.json({text: 'Profesor encontrado'});
        }

        public async create (req: Request, res: Response): Promise<void>{
         await pool.query('INSERT INTO profesor set ?', [req.body]); 
         res.json({text: 'Profesor/a guardado'});
        }

        public async update(req: Request, res:Response): Promise<void> {
            const {id} = req.params;
            await pool.query('UPDATE profesor set ? WHERE idprofesor = ?', [req.body, id]);
            res.json({message: 'El Profesor/a fue actualizado'});
        }
        
         public async delete (req: Request, res:Response): Promise<void> {
             const {id} = req.params;
              await pool.query('DELETE FROM profesor WHERE idprofesor = ?', [id]);
         }

   
}


const profController = new ProfController();
export default profController;