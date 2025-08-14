import mongoose from "mongoose";

const userSchmea = new mongoose.Schema({
    username : {
        type : String,
        requied : true,
        lowercase : true
    },

    email : {
        type : String,
        requied : true,
        lowercase : true
    },

    password : {
        type : String,
        required : true,
    }
})

export const User = mongoose.model("User", userSchmea)