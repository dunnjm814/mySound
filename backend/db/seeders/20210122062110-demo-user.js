'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          profilePic: "img/anon.jpeg",
          bannerPic: "",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePic: "img/anon.jpeg",
          bannerPic: "",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePic: "img/anon.jpeg",
          bannerPic: "",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(
    "Users",
    {
      username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
    },
    {}
  );
  }
};
