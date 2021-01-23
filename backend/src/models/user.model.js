const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      // unique: true,
      required: false,
      lowercase: true,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      bcrypt: true,
    },
    bio: {
      type: String,
      required: false,
      default: '',
    },
    numArticles: {
      type: Number,
      required: false,
      default: 0,
    },
    numFollowers: {
      type: Number,
      required: false,
      default: 0,
    },
    avatar: {
      type: String,
      required: false,
      default: '',
    },
    coverImg: {
      type: String,
      required: false,
      default: '',
    },
    lastLogin: {
      type: Date,
      required: false,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);
userSchema.plugin(require('mongoose-bcrypt'), { rounds: 8 });

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
