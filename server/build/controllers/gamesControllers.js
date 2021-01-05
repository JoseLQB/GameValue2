"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database")); //pool = db
class GamesController {
    //Lista todos los juegos de la base de datos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('DESCRIBE games');
            //res.json('listado de juegos');
            const games = yield database_1.default.query('SELECT * FROM games ORDER by id DESC');
            res.json(games);
        });
    }
    //Devuelve un solo juego a partir de su id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json('mostrando juego ' + req.params.id )
            const { id } = req.params;
            const games = yield database_1.default.query("SELECT * FROM games WHERE id = ?", [id]);
            console.log(games);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "El juego no ha sido encontrado" });
        });
    }
    //Devuelve
    //Consulta la base de datos y guarda los datos de la consulta
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);//tiene los valores de los datos que se envian al cliente. Angular enviará los datos a través de aquí
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ text: 'nuevo juego añadido' });
        });
    }
    //Elimina un juego de la base de datos a partir de su id
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'borrando juego ' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM games WHERE id = ?", [id]);
            res.json({ message: "El juego ha sido eliminado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'actualizando juego ' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query("UPDATE games SET ? WHERE id = ?", [req.body, id]);
            res.json({ message: "El juego ha sido actualizado" });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
