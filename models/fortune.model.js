import mongoose from 'mongoose';
import ResourcesModel from './Model/resourcesModel';
const {Schema} = mongoose;
const FortuneSchema = Schema({
    id: {type: Number, required: true, unique: true, index: true},
    message:String,
    spirit_animal:String
}, {collection : 'Fortune'});

let Model = mongoose.model('Fortune', FortuneSchema);
Model = ResourcesModel(Model);
Model.getTest = ()=> console.log("test");
Model.getTestNum = ()=>123;

export default Model;