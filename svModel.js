const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SinhVienSchema = new Schema({
    Ten: String,
    Tuoi: Number,
    DiaChi: String,
    

  });

module.exports = mongoose.model("lab51",SinhVienSchema);