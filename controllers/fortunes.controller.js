import Fortune from '../models/fortune.model';
import logger from '../core/logger/app-logger';
import ResourcesClass from './Controller/resourceClass';
import resourcesController from './Controller/resoruceContorller';

//inheritance resourceController with Basic CRUD

// class FortuneClass extends ResourcesClass{}
// const controller = new FortuneClass(Fortune);
const Model = Fortune;
let controller = resourcesController(Model);


controller.getTest = async (req,res) => {
    try{
        // const datas = await Model.getTest();
        console.log(req.query);
        logger.info('send all fortunes');
        res.send({});
    }
    catch(err){
        logger.error('Error in getting fortunes- ' + err);
        res.send('Got error in getTest');
    }
}
export default controller;