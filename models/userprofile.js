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
        type: String,
        detail: {
            major: String,
            degree: String,
            institution: String
        }
    }],
    experience: [{
        type: String,
        detail: {
            company: String,
            position: String,
            dateofjoin: Date,
            dateofleave: Date,
            location: String
        }
    }]
  });

export default mongoose.model('UserProfile', profileSchema);
