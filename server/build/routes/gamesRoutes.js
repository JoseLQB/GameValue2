"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
//Enrutador que se inicializará en el index.ts
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //comentario de prueba git
    config() {
        this.router.get('/', gamesControllers_1.gamesController.list);
        this.router.get('/:id', gamesControllers_1.gamesController.getOne);
        this.router.post('/', gamesControllers_1.gamesController.create);
        this.router.put('/:id', gamesControllers_1.gamesController.update);
        this.router.delete('/:id', gamesControllers_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
