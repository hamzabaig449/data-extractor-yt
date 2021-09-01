const mongoose = require("mongoose")
exports.connect = ()=>{
    mongoose.connect('mongodb://localhost/mediaSurfing', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("connected")
    });
}