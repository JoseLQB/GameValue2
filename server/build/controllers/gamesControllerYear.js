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
exports.gamesControllerYear = void 0;
const database_1 = __importDefault(require("../database")); //pool = db
class GamesControllerYear {
    //Devuelve los juegos filtrados por el año en el que fueron jugados
    getByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { year } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games WHERE year = ?', [year]);
            console.log(games);
            res.json(games);
        });
    }
    //Devuelve el número de juegos jugados en ese año
    getTotalByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { year } = req.params;
            const games = yield database_1.default.query('SELECT count(id) from games where year = ?', [year]);
            console.log(games);
            res.json(games);
        });
    }
}
exports.gamesControllerYear = new GamesControllerYear();
exports.default = exports.gamesControllerYear;
