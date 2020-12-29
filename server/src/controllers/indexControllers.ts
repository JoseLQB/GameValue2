import {Request, Response } from 'express';

class IndexController{

    public index(req: Request, res: Response){
        //res.send('Hello from controller');
        res.json({text: 'API Is in /api/games'});
    }
    
}

export const indexController = new IndexController();