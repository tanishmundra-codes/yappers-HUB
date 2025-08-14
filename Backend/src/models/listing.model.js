import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    title: {
        type : String,
        required : true
    },

    link: {
        type : String,
        required : true
    },

    image :{
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    }
})

export const Listing = mongoose.model("Listing", listingSchema)