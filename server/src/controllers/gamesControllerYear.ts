import {request, Request, Response } from 'express';

import pool from '../database'; //pool = db

class GamesControllerYear{
    //Devuelve los juegos filtrados por el año en el que fueron jugados
    public async getByYear(req: Request, res: Response): Promise<any>{
        const {year} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE year = ?', [year]);
        console.log(games);
        res.json(games);
    }
    //Devuelve el número de juegos jugados en ese año
    public async getTotalByYear(req:Request,res:Response):Promise<any>{
        const{year} = req.params;
        const games = await pool.query('SELECT count(id) from games where year = ?', [year]);
        console.log(games);
        res.json(games);
    }
}
export const gamesControllerYear = new GamesControllerYear();
export default gamesControllerYear;