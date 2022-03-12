const mongoose = require("mongoose");
const playlist = require("./playlist");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    playlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist"
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);