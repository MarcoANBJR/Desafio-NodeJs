import mongoose from "mongoose";

mongoose.connect('mongodb+srv://compass:123@compass.3syyms7.mongodb.net/NodeJs');

let db = mongoose.connection;

export default db;
