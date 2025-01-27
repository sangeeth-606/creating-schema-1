const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: false }
});


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  profile: profileSchema, 
  lastLogin: { type: Date, default: null }
}, {
  timestamps: true 
});


const User = mongoose.model('User', userSchema);

module.exports = User;
