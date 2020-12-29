import {request, Request, Response } from 'express';

import pool from '../database'; //pool = db

class GamesController{

    public list(req: Request, res: Response){
        //pool.query('DESCRIBE games');
        res.json('listing games');
    } 

    public getOne(req: Request, res: Response){
        res.json('geting game ' + req.params.id )
    }

    public create (req: Request, res: Response){
        res.json({text: 'creating a game'});
    }

    public delete(req: Request,res: Response){
        res.json({text: 'deleting a game ' + req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'updating a game ' + req.params.id});
    }
}

export const gamesController = new GamesController();
export default gamesController;