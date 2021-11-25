import mongoose from 'mongoose'

const {Schema} = mongoose

const CardSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    ImgUrl:{
        type:String,
        required:true
    },
  })
  
  export default mongoose.model('cards',CardSchema)