import { Request, Response } from 'express';
import pool from '../database';

class AltaAlumnoController {



  
public async list (req: Request,res: Response) {
    await pool.query('SELECT * FROM alumno', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

public async getOne( req: Request, res:Response): Promise<void>{
    const {id} = req.params;
    const alumno = await pool.query('SELECT * FROM alumno WHERE idalumno= ?',[id]);
    console.log(id);
    res.json({text: 'Alumno encontrado'});
}

public async create (req: Request, res: Response): Promise<void>{
await pool.query('INSERT INTO alumno set ?', [req.body]); 
res.json({text: 'Alumno guardado'});

}

public async update(req: Request, res:Response): Promise<void> {
    const {id} = req.params;
    await pool.query('UPDATE alumno set ? WHERE idalumno = ?', [req.body, id]);
    res.json({message: 'El alumno fue actualizado'});
}

 public async delete (req: Request, res:Response): Promise<void> {
    const {id} = req.params;
     await pool.query('DELETE FROM alumno WHERE idalumno = ?', [id]);
      res.send({text: 'El alumno fue borrado'});
 }




}


const altaAlumnoController = new AltaAlumnoController();
export default altaAlumnoController;