import Model from '../models/user.model';
import logger from '../core/logger/app-logger';

const controller ={};

controller.getList = async (req,res) => {
    try{
        const datas = await Model.getList();
        logger.info('send all fortunes');
        res.send(datas);
    }
    catch(err){
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.getOne = async (req,res)=>{
    try{
        const data = await Model.getOne(req.params.name);
        logger.info('sending fourtune...'+data);
        res.send(data);

    }catch(err){
        logger.error('Error in getting car- ' + err);
        res.send('Got error in get one');
    }
}

controller.add = async (req,res) => { 
    try {
        let data = Model( req.body);
        const saved = await Model.add(data);
        logger.info('Adding fortune...');
        res.send('added: ' + saved);
    }
    catch(err) {
        logger.error('Error in getting fortune- ' + err);
        res.send('Got error'+err);
    }
}


controller.delete = async (req, res) => {
    try{
        const {name} = req.body;
        const fortune = await Model.getOne(name);
        const removed = await Model.delete(name);
        logger.info('Deleted Fortune- ' + removed);
        res.send(Model);
    }
    catch(err) {
        console.log(err);
        logger.error('Failed to delete Fortune- ' + err);
        res.send('Delete failed..!');
    }
}

controller.addlist = async (req,res) => {
 
        const { list } = req.body;
        let errors = {}
        list.map( async (item)=> {
                try{ 
                    const data = Model(item);
                    const saved = await Model.add(data);
                    logger.info('Adding fortune...'+saved);
                }
                catch(err){
                    console.log(err);
                    errors.err = err;
                    logger.error('Failed to delete Fortune- ' + err);
                    res.send('Post list failed..!');
                }
        } )
        if(!errors.err){
            res.send(list);
        }
}

export default controller;