import express from 'express';
import carController from '../controllers/cars.controller'
const router = express.Router()

router.get('/', (req, res) => {
    carController.getList(req, res);
});

router.post('/add', (req, res) => {
    carController.add(req, res);
});

router.delete('/remove', (req, res) => {
    // console.log(req.body.name);
    carController.delete(req, res);
});
router.get('/:name',(req, res) => {
    carController.getOne(req,res);
})

export default router;