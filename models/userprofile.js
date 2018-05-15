import mongoose from 'mongoose';

var profileSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
        type: String
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
        position: String
    }],
    industries: {
        currentindustry: String,
        targetindustry: String
    },
    about: {
        about: String,
        whyindustry: String,
        transitioningquestions: String
    },
    mentor: Boolean
  });

export default mongoose.model('UserProfile', profileSchema);
