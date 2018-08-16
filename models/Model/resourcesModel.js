export default (Model)=>{
    Model.getList = () => Model.find({});
    Model.add = (data) => data.save();
    Model.delete = (id) =>  Model.remove({id},(err)=>console.log(err));
    Model.getOne = (id)=> Model.findOne({id},(err)=>console.log(err));
    Model.addList = (list)=> list.map((data)=>data.save());
    return Model
}