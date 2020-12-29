"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send('Hello from controller');
        res.json({ text: 'API Is in /api/games' });
    }
}
exports.indexController = new IndexController();
