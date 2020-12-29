import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server{

    public app: Application;

    constructor(){ //1 Este contructor iniciará express
        this.app = express(); //2 Express devuelve un objeto
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //permite tomar datos de formatos json
        this.app.use(express.urlencoded({extended:false}));//permite tomar datos de un formulario html

    }

    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port ' + this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();