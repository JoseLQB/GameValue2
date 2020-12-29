"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    list(req, res) {
        //pool.query('DESCRIBE games');
        res.json('listing games');
    }
    getOne(req, res) {
        res.json('geting game ' + req.params.id);
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
