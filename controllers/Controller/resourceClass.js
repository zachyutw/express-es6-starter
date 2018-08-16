import logger from '../../core/logger/app-logger';

export default class ResourcesController{
    constructor(Model) {
        this.Model = Model;
    }
    getList = async (req,res) => {
        try{
            const datas = await this.Model.getList();
            logger.info('send all fortunes');
            res.send(datas);
        }
        catch(err){
            logger.error('Error in getting cars- ' + err);
            res.send('Got error in getAll');
        }
    }
    getOne = async (req,res)=>{
        try{
            const data = await this.Model.getOne(req.params.name);
            logger.info('sending fourtune...'+data);
            res.send(data);
    
        }catch(err){
            logger.error('Error in getting car- ' + err);
            res.send('Got error in get one');
        }
    }
    
    add = async (req,res) => { 
        try {
            let data =  this.Model( req.body);
            const saved = await this.Model.add(data);
            logger.info('Adding fortune...');
            res.send('added: ' + saved);
        }
        catch(err) {
            logger.error('Error in getting fortune- ' + err);
            res.send('Got error'+err);
        }
    }
    
    
    delete = async (req, res) => {
        try{
            const {name} = req.body;
            const model = await this.Model.getOne(name);
            const removed = await this.Model.delete(name);
            logger.info('Deleted Fortune- ' + removed);
            res.send(model);
        }
        catch(err) {
            console.log(err);
            logger.error('Failed to delete Fortune- ' + err);
            res.send('Delete failed..!');
        }
    }
    
    addlist = async (req,res) => {
            const { list } = req.body;
            let errors = {}
            list.map( async (item)=> {
                    try{ 
                        const data = this.Model(item);
                        const saved = await this.Model.add(data);
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
}

