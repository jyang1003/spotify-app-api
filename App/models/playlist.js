const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    track: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model("Playlist", playlistSchema);