import {Router} from 'express';

import {gamesController} from '../controllers/gamesControllers';
import {gamesControllerYear} from '../controllers/gamesControllerYear';

import{} from '../controllers/gamesControllers';
//Enrutador que se inicializará en el index.ts
class GamesRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.get("/total", gamesController.getTotal);
        this.router.get('/ano/:year', gamesControllerYear.getByYear);
        this.router.get('/total/:year', gamesControllerYear.getTotalByYear);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;