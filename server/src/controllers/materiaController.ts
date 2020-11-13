import { Request, Response } from 'express';
import pool from '../database';

class MateriaController {
  
  
public async list (req: Request,res: Response) {
    await pool.query('SELECT * FROM materia', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}


public async getMaterias (req: Request, res: Response): Promise<void> {
    const idanio = req.params.idanio.toString();
     await pool.query('SELECT * FROM materia WHERE idanio=?',[idanio],function(err, data) {
         res.json({materias:data});
     });
    
}

public async getMateriasProfesor (req: Request, res: Response): Promise<void> {
    const idprofesor = req.params.idprofesor.toString();
     await pool.query('SELECT * FROM materia WHERE idprofesor=?',[idprofesor],function(err, data) {
         res.json({materias:data});
     });
    
}



public async getOne( req: Request, res:Response): Promise<void>{
    const {id} = req.params;
    const materia = await pool.query('SELECT * FROM materia WHERE idmateria= ?',[id]);
    console.log(id);
    res.json({text: 'Materia encontrada'});
}

public async create (req: Request, res: Response): Promise<void>{
 await pool.query('INSERT INTO materia set ?', [req.body]); 
 res.json({message: 'Materia guardada'});
}

public async update(req: Request, res:Response): Promise<void> {
    const {id} = req.params;
    await pool.query('UPDATE materia set ? WHERE idmateria = ?', [req.body, id]);
    res.json({message: 'La materia fue actualizada'});
}

 public async delete (req: Request, res:Response): Promise<void> {
     const {id} = req.params;
      await pool.query('DELETE FROM materia WHERE idmateria = ?', [id]);
 }




}


const materiaController = new MateriaController();
export default materiaController;