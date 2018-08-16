import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Car'});

let Model = mongoose.model('Car', CarSchema);

Model.getList = () => {
    return Model.find({});
}

Model.add = (data) => {
    return data.save();
}

Model.delete = (name) => {
    return Model.remove({name},(err)=>console.log(err));
}
Model.getOne = (name)=>{return Model.findOne({name});}

export default Model;