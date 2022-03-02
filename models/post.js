const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        // text:String,
        // postedBy:{type:ObjectId,ref:"User"}
        writer: {
            type: ObjectId,
            ref: 'User'
        },
        postId: {
            type: ObjectId,
            ref: 'Post'
        },
        responseTo: {
            type: ObjectId,
            ref: 'User'
        },
        content: {
            type: String
        }
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Post",postSchema)