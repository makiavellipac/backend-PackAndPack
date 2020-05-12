const {model,Schema}=require('mongoose');

const user=new Schema(
    {
        name:{
            type:String,
            minlength:3,
            maxlength:50
        },
        phone:{
            type:Number,
            min:1000000,
            max:999999999999999
        },
        age:{
            type:Number,
            min:0,
            max:125
        },
        gender:{
            type:String,
             enum:['Male','Female']
        }

    },
    {
        timestamps:true,
        versionKey: false
    }
)

module.exports=model("user",user);