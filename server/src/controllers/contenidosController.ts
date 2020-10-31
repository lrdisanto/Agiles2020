import { Request, Response } from 'express';
import pool from '../database';

class ContenidosController {

    
public async getOne( req: Request, res:Response): Promise<void>{
    const {id} = req.params;
    const contenido = await pool.query('SELECT * FROM contenidos WHERE idcontenido= ?',[id]);
    console.log(id);
    res.json({text: 'Contenido encontrado'});
}

public async create (req: Request, res: Response): Promise<void>{
 await pool.query('INSERT INTO contenidos set ?', [req.body]); 
 res.json({message: 'Contenido guardado'});
}

public async update(req: Request, res:Response): Promise<void> {
    const {id} = req.params;
    await pool.query('UPDATE contenidos set ? WHERE idcontenido = ?', [req.body, id]);
    res.json({message: 'El contenido fue actualizado'});
}

 public async delete (req: Request, res:Response): Promise<void> {
     const {id} = req.params;
      await pool.query('DELETE FROM contenidos WHERE idcontenido = ?', [id]);
 }


 public async lau (req: Request,res: Response) {
    await pool.query('SELECT * FROM contenidos as c INNER JOIN materia as m on c.codigomateria=m.idmateria INNER JOIN profesor as p on p.idprofesor=m.idprofesor where p.idprofesor=1', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

public async alumno (req: Request,res: Response) {
    await pool.query('SELECT * FROM contenidos as c INNER JOIN materia as m on c.codigomateria=m.idmateria INNER JOIN profesor as p on p.idprofesor=m.idprofesor where p.idprofesor=1', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

}


const contenidosController = new ContenidosController();
export default contenidosController;