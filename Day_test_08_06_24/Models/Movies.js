import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    title:{type:String,require:true},
    acter:{type:String,require:true},
    releoreData:{type:Number,require:true},
    imdb:{type:Number,require:true},
    imgSrc:{type:String,require:true},
    createAt:{type:Date,default:Date.now},
});
export const Movies = mongoose.model("Movie",movieSchema);