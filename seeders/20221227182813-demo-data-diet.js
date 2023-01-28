'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataDiets", [
      {
        jenis_diet: "Diet Mayo",
        desc_diet: "Diet mayo sebenarnya merupakan diet yang berfokus pada pengubahan gaya hidup menjadi lebih sehat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_diet: "Diet Tinggi Protein",
        desc_diet: "Diet tinggi .",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_diet: "Diet Protein Shake",
        desc_diet: "Diet tinggi protein merupakan diet yang mengutamakan konsumsi protein ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_diet: "Diet Vegan",
        desc_diet: "Diet vegan adalah cara diet yang menghindari semua produk hewani",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataDiets", null, {});
  }
};
