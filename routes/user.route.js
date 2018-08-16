import express from 'express';
import fortunesController from '../controllers/fortunes.controller';

const router = express.Router()

router.get('/', (req, res) => {
    fortunesController.getList(req, res);
});

router.post('/add', (req, res) => {
    fortunesController.add(req, res);
});
router.delete('/remove', (req, res) => {
    fortunesController.delete(req, res);
});
router.post('/addlist', (req, res) => {
    fortunesController.addlist(req, res);
});
router.get('/:name',(req, res) => {
    fortunesController.getOne(req,res);
})

export default router;