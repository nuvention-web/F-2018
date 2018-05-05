import mongoose from 'mongoose';

var profileSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
        first: String,
        middle: String,
        last: String
    },
    gender: {
        type: String
    },
    age: Number,
    education: [{
        major: String,
        degree: String,
        institution: String
    }],
    experience: [{
        company: String,
        position: String,
        dateofjoin: Date,
        dateofleave: Date,
        industry: String,
        location: String
    }],
    targetindustry: {
        type: String,
    }
  });

export default mongoose.model('UserProfile', profileSchema);
