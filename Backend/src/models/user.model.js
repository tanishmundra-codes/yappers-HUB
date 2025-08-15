import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true
    },

    email : {
        type : String,
        required : true,
        lowercase : true
    },

    password : {
        type : String,
        required : true,
    }
})

const User = mongoose.model("User", userSchema);

export default User; // default export for easier importing