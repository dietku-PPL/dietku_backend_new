const models = require("../models");
const { DataUser } = models;
const { User } = models;


module.exports = {
  getAllUser: async (req, res, next) => {
    try {
      const user = await User.findAll({
        attributes: {
          include: [
            {
              model: DataUser,
              as: "DataUser",
            },
          ],
          exclude: ["password"],
        },
      });

      const data = await DataUser.findAll();
      res.status(200).json({
        message: "success get data",
        user,
      });
    } catch (err) {
      next(err);
    }
  },

  getUserByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await DataUser.findOne({ where: { id_user: id } });
      const user = await User.findOne({
        where: { id },
        include: [
          {
            model: DataUser,
            as: "DataUser",
          },
        ],
        attributes: { 
        exclude: ["password", "createdAt", "updatedAt"],
        },
      });

      data
        ? res.status(200).json({
            message: "success get data",
            user,
          })
        : res.status(400).json({
            message: "data not found",
          });
    } catch (err) {
      next(err);
    }
  },

  addUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { umur, berat_badan, tinggi_badan, jk } = req.body;

      await DataUser.create({
        id_user: id,
        umur,
        berat_badan,
        tinggi_badan,
        jk,
        kalori:
          jk === "Laki-laki"
            ? 66 + 13.7 * berat_badan + 5 * tinggi_badan - 6.8 * umur
            : 655 + 9.6 * berat_badan + 1.8 * tinggi_badan - 4.7 * umur,
      });

      res.status(201).json({
        message: "success create data",
        dataUser: {
          umur,
          berat_badan,
          tinggi_badan,
          jk,
          kalori:
            jk === "Laki-laki"
              ? 66 + 13.7 * berat_badan + 5 * tinggi_badan - 6.8 * umur
              : 655 + 9.6 * berat_badan + 1.8 * tinggi_badan - 4.7 * umur,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  deleteUserByID: async (req, res, next) => {
    const { id } = req.params;
    await DataUser.destroy({
      where: {
        id_user: id,
      },
    });

    res.status(204).json({
      message: "resource deleted successfully",
    });
  },

  updateUserByID: async (req, res, next) => {
    const { id } = req.params;
    const { umur, berat_badan, tinggi_badan, jk } = req.body;

    await DataUser.update(
      {
        umur,
        berat_badan,
        tinggi_badan,
        jk,
        kalori:
          jk === "Laki-laki"
            ? 66 + 13.7 * berat_badan + 5 * tinggi_badan - 6.8 * umur
            : 655 + 9.6 * berat_badan + 1.8 * tinggi_badan - 4.7 * umur,
      },
      {
        where: { id_user: id },
      }
    );

    res.status(201).json({
      message: "updated data successfull",
      umur,
      berat_badan,
      tinggi_badan,
      jk,
      kalori:
        jk === "Laki-laki"
          ? 66 + 13.7 * berat_badan + 5 * tinggi_badan - 6.8 * umur
          : 655 + 9.6 * berat_badan + 1.8 * tinggi_badan - 4.7 * umur,
    });
  },
};
