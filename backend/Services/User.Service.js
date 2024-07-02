const { User } = require("../models");

const createTeacher = async (teacherData) => {
  const teacher = await User.create(teacherData);
  return teacher;
};

module.exports = { createTeacher}