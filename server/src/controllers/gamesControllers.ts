import {request, Request, Response } from 'express';

import pool from '../database'; //pool = db

class GamesController{
    //Lista todos los juegos de la base de datos
    public async list(req: Request, res: Response):Promise<void> {
        //pool.query('DESCRIBE games');
        //res.json('listado de juegos');
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    } 
    //Devuelve un solo juego a partir de su id
    public async getOne(req: Request, res: Response): Promise<any>{
        //res.json('mostrando juego ' + req.params.id )
        const {id} = req.params;
        const games = await pool.query("SELECT * FROM games WHERE id = ?" , [id]);
        console.log(games);
        if(games.length>0){
            return res.json(games[0]);
        }
        res.status(404).json({text: "El juego no ha sido encontrado"});
    }
    //Consulta la base de datos y guarda los datos de la consulta
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);//tiene los valores de los datos que se envian al cliente. Angular enviará los datos a través de aquí
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({text: 'nuevo juego añadido'});
    }
    //Elimina un juego de la base de datos a partir de su id
    public async delete(req: Request,res: Response): Promise<void>{
        //res.json({text: 'borrando juego ' + req.params.id});
        const {id} = req.params;
        await pool.query("DELETE FROM games WHERE id = ?", [id])
        res.json({message: "El juego ha sido eliminado"})
    }

    public async update(req: Request, res: Response): Promise<void>{
        //res.json({text: 'actualizando juego ' + req.params.id});
        const {id} = req.params;
        await pool.query("UPDATE games SET ? WHERE id = ?", [req.body, id]);
        res.json({message: "El juego ha sido actualizado"});
    }
}

export const gamesController = new GamesController();
export default gamesController;