import express from 'express';
import controller from '../controllers/fortunes.controller';
import ResourcesRoutes from './Routes/resourcesRoutes';

let router = express.Router()
router = ResourcesRoutes(router,controller);
router.get('/test',(req, res) => {
    controller.getTest(req,res);
})
export default router;