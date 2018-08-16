import mongoose from 'mongoose';
import { Date } from 'core-js';

const ArticleSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    title:{type:String,required:true},
    text:String,
    coverImg:String,
    
    createTime: {
        type:Date,
        required: true,
        default:new Date()
    }
}, {collection : 'Fortune'});

let Modal = mongoose.model('Fortune', ArticleSchema,'Fortune');


Modal.getList = () => {
    return Modal.find({});
}

Modal.add = (data) => {
    return data.save();
}
Modal.delete = (id) => {
    return Modal.remove({id},(err)=>console.log(err));
}
Modal.getOne = (id)=>{
    return Modal.findOne({id},(err)=>console.log(err));
}

export default Modal;