const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/anildb", {useNewUrlParser: true,useUnifiedTopology:true});

// mongoose.set("debug", true);
// mongoose.set("strictQuery", false);