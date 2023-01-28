"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataHitungs", [
      {
        id_user: 1,
        hitung_kalori: 390,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 2,
        hitung_kalori: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataHitungs", null, {});
  },
};
