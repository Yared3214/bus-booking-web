const { userService } = require("../services");
const { User} = require("../models");


const teacherRegister = async (req, res) => {
  try {
    const { fullName, email, password} = req.body;
    const teacherExists = await User.isEmailTaken(email);
    if (teacherExists) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email is already taken");
    }
    const teacherBody = {
      fullName,
      email,
      password,
      role: "teacher",
    };
    await userService.createTeacher(teacherBody);
    res.status(httpStatus.CREATED).json({ message: "Teacher created Successfully" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};


module.exports = {teacherRegister}