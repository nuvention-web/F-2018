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
    age: Number,
    location: {
        city: String,
        state: String
    },
    education: [{
        major: String,
        degree: String,
        institution: String
    }],
    experience: [{
        company: String,
        position: String,
        industry: String
    }],
    targetindustry: {
        type: String,
    }
  });

export default mongoose.model('UserProfile', profileSchema);
