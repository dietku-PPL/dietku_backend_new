const models = require("../models");
const { DataHitung } = models;

module.exports = {
  getAllHitung: async (req, res, next) => {
    try {
      const data = await DataHitung.findAll();
      res.status(200).json({
        message: "success get data",
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  getHitungById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await DataHitung.findOne({ where: { id } });
      data
        ? res.status(200).json({
            message: "success get data",
            data,
          })
        : res.status(400).json({
            message: "data not found",
          });
    } catch (err) {
      next(err);
    }
  },

  addHitung: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { hitung_kalori } = req.body;

      await DataHitung.create({
        id_user: id,
        hitung_kalori,
      });

      res.status(201).json({
        message: "success create data",
      });

    } catch (err) {
      next(err);
    }
  },

  deleteHitungById: async (req, res, next) => {
    try {
      const { id } = req.params;

      await DataHitung.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "success delete data",
      });
    } catch (err) {
      next(err);
    }
  },

  updateUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { hitung_kalori } = req.body;

      await DataHitung.update(
        {
          hitung_kalori,
        },
        {
          where: {
            id_user: id,
          },
        }
      );

      res.status(200).json({
        message: "success update data",
      });
    } catch (err) {
      next(err);
    }
  },
};
