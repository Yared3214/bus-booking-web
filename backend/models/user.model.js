
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
// const toJson = require("@meanie/mongoose-to-json");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email!");
        }
      },
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    PhoneNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true
  },
  },
  { timestamps: true }
);

userSchema.pre('save', async function(next) {
  try {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the salt
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Replace the plain-text password with the hashed one
    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = { User };