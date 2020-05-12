const user=require("../models/user");

const getDateForConsulting=()=>{
    fecha=new Date();
    fecha.setDate(fecha.getDate()-2);
    fecha.setHours(-5,00,00);
    return fecha
  }

exports.newRegistry=async(req,res)=>{
    const {name,phone,age,gender}=req.body;
    await user.create({name,phone,age,gender})
    .then((users)=>res.status(201).json({users}))
    .catch((err)=>res.status(400).json({err}))
}

exports.consultUser=async(req,res)=>{
    const {userName}=req.params
    if(userName){
        const data=await user.find({name:userName})
        res.status(200).json({data})
    }
    else{
        const data=await user.find()
        res.status(200).json({data})
    }
}

exports.deleteRegistry=async(req,res)=>{
    const {_id}=req.params
    await user.findByIdAndDelete({_id})
    .then((users)=>res.status(201).json({users}))
    .catch((err)=>res.status(400).json({err}))
}

exports.consultByAge=async(req,res)=>{
    //console.log(getDateForConsulting())
    const data=await user.find(
        {$and:[{
            $and:[
                {age:{
                    $gt:18
                }},
                {gender:"Male"}
            ]
        },
        {createdAt:{
            $gt:getDateForConsulting()
        }}
        ]},{name:1,phone:1}
    )
    res.status(200).json({data})
}
//{$and:[{$and:[{age:{$gt:18}},{gender:"Male"}]},{createdAt:{$gt:new ISODate("2020-05-12T04:50:30Z")}}]}
