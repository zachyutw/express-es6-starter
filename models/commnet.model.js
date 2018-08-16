import mongoose from 'mongoose';
const {Schema} = mongoose;
const CommentSchema = Schema({
    text:String,
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
}, {collection : 'Comment'});

let Modal = mongoose.model('Comment', CommentSchema,'Comment');
Modal.getList = () => Modal.find({}) ;
Modal.add = (data) =>  data.save(); 
Modal.delete = (id) => {
    return Modal.remove({id},(err)=>console.log(err));
}
Modal.getOne = (id)=>{
    return Modal.findOne({id},(err)=>console.log(err));
}

export default Modal;