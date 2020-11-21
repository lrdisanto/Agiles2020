import { Request, Response } from 'express';
import pool from '../database';

class NovedadesController {
  
  
public async list (req: Request,res: Response) {
    await pool.query('SELECT * FROM novedades', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}


public async getNovedades (req: Request, res: Response): Promise<void> {
    const idanio = req.params.idanio.toString();
     await pool.query('SELECT * FROM novedades WHERE idnovedades=?',[idanio],function(err, data) {
         res.json({novedades:data});
     });
    
}





public async getOne( req: Request, res:Response): Promise<void>{
    const {id} = req.params;
    const materia = await pool.query('SELECT * FROM novedades WHERE idnovedades= ?',[id]);
    console.log(id);
    res.json({text: 'Materia encontrada'});
}

public async create (req: Request, res: Response): Promise<void>{
 await pool.query('INSERT INTO novedades set ?', [req.body]); 
 res.json({message: 'Novedad guardada'});
}

public async update(req: Request, res:Response): Promise<void> {
    const {id} = req.params;
    await pool.query('UPDATE novedades set ? WHERE idnovedades = ?', [req.body, id]);
    res.json({message: 'La novedad fue actualizada'});
}

 public async delete (req: Request, res:Response): Promise<void> {
     const {id} = req.params;
      await pool.query('DELETE FROM novedades WHERE idnovedades = ?', [id]);
 }




}


const novedadesController = new NovedadesController();
export default novedadesController;