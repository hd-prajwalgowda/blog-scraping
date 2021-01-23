const status = require('http-status');
const logger = require('../config/logger');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user.model');

const getUserById = catchAsync(async (req, res) => {
  const users = [
    {
      _id: 'jkdfgdfhgsiu7t9348ytkrjsdfh',
      name: 'test1',
      type: 'user',
    },
    {
      name: 'test2',
      type: 'sometype',
    },
    {
      name: 'test3',
      type: 'mod',
    },
    {
      name: 'test4',
      type: 'admin',
    },
  ];

  console.log(req.params);
  return res.json(
    users.find((ele) => {
      if (ele.name === req.params.id) return ele;
    })
  );
});

const getUserByUserName = catchAsync(async (req, res) => {});
const getUsers = catchAsync(async (req, res) => {});
const getMe = catchAsync(async (req) => {});
const updateMe = catchAsync(async () => {});

module.exports = {
  getUserById,
  getUserByUserName,
  getUsers,
  getMe,
  updateMe,
};
