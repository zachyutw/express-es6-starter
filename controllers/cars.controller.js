import Car from '../models/cars.model'
import logger from '../core/logger/app-logger'

const carController = {};

carController.getList = async (req, res) => {
    try {
        const datas = await Car.getList();
        logger.info('sending all cars...');
        res.send(datas);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}
carController.getOne = async (req, res) => {
    try{
        const data = await Car.getOne(req.params.name);
        logger.info('sending car...');
        res.send(data);

    }catch(err){
        logger.error('Error in getting car- ' + err);
        res.send('Got error in get one');
    }
}
carController.add = async (req, res) => {
    try {
        let newData = Car(req.body)
        const saved = await Car.add(newData);
        logger.info('Adding car...');
        res.send('added: ' + saved);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in addCar');
    }
}

carController.delete = async (req, res) => {
    try{
        const {name} = req.body;
        const removed = await Car.delete(name);
        logger.info('Deleted Car- ' + removed);
        res.send('Car successfully deleted');
    }
    catch(err) {
        console.log(err);
        logger.error('Failed to delete car- ' + err);
        res.send('Delete failed..!');
    }
}

export default carController;