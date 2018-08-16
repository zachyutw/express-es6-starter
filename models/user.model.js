import mongoose from 'mongoose';

const UserInfoSchema = mongoose.Schema({
    address:String,
    email:String,
    city:String,
},{collection:'UserInfo'});


const UserSchema = mongoose.Schema({
    username: {type: String, required: [true,'Name is required'], unique: true,index:true},
    password:String,
    logindate: {type:Date,  default: Date.now},
    privilege:Number,

}, {collection : 'User'});

let Modal = mongoose.model('User', UserSchema);

Modal.getList = () => Modal.find({});
Modal.add = (data) => data.save();
Modal.delete = (id) =>  Modal.remove({id},(err)=>console.log(err));
Modal.getOne = (id)=> Modal.findOne({id},(err)=>console.log(err));
Modal.addList = (list)=> list.map((data)=>data.save());
export default Modal;