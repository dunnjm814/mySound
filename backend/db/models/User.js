'use strict';
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      bannerPic: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      }
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, profilePic, bannerPic, description } = this; // context will be the User instance
    return { id, username, email, profilePic, bannerPic, description };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };
  User.signup = async function ({ username, email, password, profilePic, bannerPic, description }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      profilePic,
      bannerPic,
      description,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };
  User.associate = function(models) {
    User.hasMany(models.Track, { foreignKey: 'userId' })
    User.hasMany(models.FeedBack, {foreignKey: 'userId'})
  };
  return User;
};
